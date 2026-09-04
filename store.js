// Persistência do estado dos kits num banco Redis (Vercel Marketplace, ex.
// Upstash). Guarda o array inteiro sob uma única chave — é pequeno (dezenas
// de kits) e sempre lido/escrito por completo, então não precisa de um banco
// relacional.
//
// O nome das variáveis de ambiente injetadas varia um pouco conforme a
// integração instalada no projeto (algumas usam KV_REST_API_URL/TOKEN, outras
// UPSTASH_REDIS_REST_URL/TOKEN) — por isso aceitamos qualquer uma delas aqui,
// em vez de depender de um nome fixo.

const { Redis } = require('@upstash/redis');
const seed = require('./seed');

const KEY = 'danielli:kits:v1';

function getRedis() {
  const url =
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.REDIS_KV_REST_API_URL;
  const token =
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.REDIS_KV_REST_API_TOKEN;
  if (!url || !token) {
    throw new Error(
      'Banco de dados não configurado: nenhuma variável KV_REST_API_URL/UPSTASH_REDIS_REST_URL ' +
      'foi encontrada. Conecte um banco Redis ao projeto na Vercel (Storage / Integrations) e faça redeploy.'
    );
  }
  return new Redis({ url, token });
}

function round2(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

async function getKits() {
  const redis = getRedis();
  let kits = await redis.get(KEY);
  if (!kits) {
    kits = seed;
    await redis.set(KEY, kits);
  }
  return kits;
}

async function setKits(kits) {
  const redis = getRedis();
  await redis.set(KEY, kits);
  return kits;
}

// Soma `addQty` unidades de um kit já existente, recalculando os itens.
function applyPedidoItem(kit, addQty) {
  kit.qtd_kit += addQty;
  kit.ativo = kit.qtd_kit > 0;
  kit.itens.forEach((it) => {
    it.qtd += addQty;
    it.total = round2(it.g_unid * it.qtd);
  });
  kit.total_kit = round2(kit.itens.reduce((s, it) => s + it.total, 0));
}

// Zera as quantidades de produção do dia em todos os kits (não mexe no
// cadastro em si — ingredientes, corte e g/un continuam intactos).
function zerarKits(kits) {
  kits.forEach((kit) => {
    kit.qtd_kit = 0;
    kit.total_kit = 0;
    kit.ativo = false;
    kit.itens.forEach((it) => { it.qtd = 0; it.total = 0; });
  });
  return kits;
}

module.exports = { getKits, setKits, applyPedidoItem, zerarKits, KEY };

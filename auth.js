// Proteção simples por senha compartilhada para as rotas que escrevem dados
// (lançar pedido / zerar produção). A leitura (GET /api/kits) fica aberta —
// é só a produção do dia, sem nada sensível.
//
// Por padrão (fail-closed): se ADMIN_PASSWORD não estiver configurada como
// variável de ambiente na Vercel, todo pedido de escrita é recusado. Isso
// evita que alguém suba o projeto sem senha e deixe os dados abertos para
// qualquer pessoa com o link zerar ou alterar a produção.
function checkAuth(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    console.warn('ADMIN_PASSWORD não configurada — recusando escrita por segurança.');
    return false;
  }
  const provided = req.headers['x-admin-key'];
  return typeof provided === 'string' && provided.length > 0 && provided === expected;
}

module.exports = { checkAuth };

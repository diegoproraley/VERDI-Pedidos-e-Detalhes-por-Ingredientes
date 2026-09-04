const { getKits, setKits, applyPedidoItem } = require('../../lib/store');
const { checkAuth } = require('../../lib/auth');

// POST /api/kits/lancar
// body: { items: { [codigo]: quantidade } }
// Soma as quantidades informadas às que já estão em produção hoje (não
// substitui) — mesma lógica usada quando o mesmo produto aparece em mais de
// um pedido do dia.
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  if (!checkAuth(req)) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  const items = body && body.items;
  if (!items || typeof items !== 'object' || Array.isArray(items)) {
    res.status(400).json({ error: 'invalid_body' });
    return;
  }

  try {
    const kits = await getKits();
    Object.keys(items).forEach((codigo) => {
      const raw = Number(items[codigo]);
      if (!Number.isFinite(raw) || raw <= 0) return;
      const qty = Math.min(999, Math.floor(raw));
      const kit = kits.find((k) => k.codigo === codigo);
      if (kit) applyPedidoItem(kit, qty);
    });
    await setKits(kits);
    res.status(200).json({ kits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal_error' });
  }
};

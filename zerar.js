const { getKits, setKits, zerarKits } = require('../../lib/store');
const { checkAuth } = require('../../lib/auth');

// POST /api/kits/zerar
// Zera as quantidades de produção do dia em todos os kits. Não apaga nada
// do cadastro (ingredientes, corte, peso por unidade continuam intactos).
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  if (!checkAuth(req)) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }

  try {
    let kits = await getKits();
    kits = zerarKits(kits);
    await setKits(kits);
    res.status(200).json({ kits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal_error' });
  }
};

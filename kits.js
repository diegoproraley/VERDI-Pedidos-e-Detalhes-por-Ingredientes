const { getKits } = require('../lib/store');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'method_not_allowed' });
    return;
  }
  try {
    const kits = await getKits();
    res.status(200).json({ kits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal_error' });
  }
};

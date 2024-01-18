// Import access to database tables
const tables = require("../tables");

const getRecos = async (req, res, next) => {
  const coefs = [-1, 1, 3];
  try {
    const { genre, prefs } = req.body;
    const parfumsSenteurs = await tables.parfum.lireParfumsEtSenteurs(genre);
    let max = 0;

    let scores = parfumsSenteurs.map((parfum) => {
      let score = 0;
      for (let i = 0; i < prefs.length; i += 1) {
        const coef = parfum.senteurs.includes(i + 1) ? coefs[prefs[i]] : 0;
        score += coef;
      }
      if (score > max) {
        max = score;
      }
      return { parfum_id: parfum.parfum_id, score };
    });

    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);

    /* eslint-disable */
    scores.forEach((row) => {
      row.pourcent = Math.round((row.score / max) * 100);
    });

    const parfums = [];
    for (const row of scores) {
      const parfum = await tables.parfum.lireParfum(row.parfum_id);
      parfum.score = row.score;
      parfum.pourcent = row.pourcent;
      parfum.senteurs = await tables.parfum.lireSenteursParfum(row.parfum_id);
      parfums.push(parfum);
    }
    /* eslint-enable */
    res.json(parfums);
  } catch (err) {
    next(err);
  }
};

const getSenteursParfum = async (req, res, next) => {
  try {
    const senteurs = await tables.parfum.lireSenteursParfum(req.params.id);
    res.json(senteurs);
  } catch (err) {
    next(err);
  }
};

const getParfum = async (req, res, next) => {
  try {
    const parfum = await tables.parfum.lireParfum(req.params.id);
    res.json(parfum);
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  getRecos,
  getSenteursParfum,
  getParfum,
};

// Import access to database tables
const tables = require("../tables");

const getRecos = async (req, res, next) => {
  try {
    const { genre, prefs } = req.body;
    const parfumsSenteurs = await tables.parfum.lireParfumsEtSenteurs(genre);
    const scores = parfumsSenteurs.map((parfum) => {
      let score = 0;
      for (let i = 0; i < prefs.length; i += 1) {
        const coef = parfum.senteurs.includes(i + 1) ? prefs[i] : 0;
        score += coef;
      }
      return { parfum_id: parfum.id, score };
    });
    scores.sort((a, b) => b.score - a.score);
    scores.slice(0, 5);

    const parfums = [];
    /* eslint-disable */
    for (const row of scores) {
      const parfum = await tables.parfum.lireParfum(row.parfum_id);
      parfum.score = row.score;
      parfums.push(parfum);
    }
    /* eslint-enable */
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  getRecos,
};

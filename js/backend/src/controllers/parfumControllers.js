// Import access to database tables
const tables = require("../tables");

/* const getRecos = async (req, res, next) => {
  try {
    const { genre, prefs } = req.body;
    const parfums = await tables.parfum.lireParfumsEtSenteurs(genre);
    parfums.map((parfum) => (
      prefs.map((senteur) => (

      ))
    ))

  } catch (err) {
    next(err);
  }
}; */

// Ready to export the controller functions
module.exports = {
  getRecos,
};

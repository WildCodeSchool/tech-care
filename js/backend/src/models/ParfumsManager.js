const AbstractManager = require("./AbstractManager");

class ParfumsManager extends AbstractManager {
  constructor() {
    super({ table: "parfum" });
  }

  async lireIdSenteursParfum(parfumId) {
    const [senteurs] = await this.database.query(
      `SELECT senteur_id FROM jointure WHERE parfum_id = ?`,
      [parfumId]
    );
    return senteurs.map((e) => e.senteur_id);
  }

  async lireParfumsEtSenteurs(genre) {
    const where = genre === "Neutre" ? "" : " WHERE genre = ?";
    const values = genre === "Neutre" ? [] : [genre];
    const [parfums] = await this.database.query(
      `SELECT id as parfum_id FROM parfum ${where}`,
      values
    );
    /* eslint-disable */
    for (let i = 0; i < parfums.length; i += 1) {
      const parfum = parfums[i];
      parfum.senteurs = await this.lireIdSenteursParfum(parfum.parfum_id);
    }
    /* eslint-enable */
    return parfums;
  }

  async lireParfum(parfumId) {
    const [parfum] = await this.database.query(
      `SELECT * FROM parfum WHERE id = ?`,
      [parfumId]
    );
    return parfum[0];
  }

  async lireSenteursParfum(parfumId) {
    const [senteurs] = await this.database.query(
      `SELECT nom 
      FROM senteur s
      JOIN jointure j on j.senteur_id = s.id
      WHERE j.parfum_id = ?`,
      [parfumId]
    );
    return senteurs.map((e) => e.nom);
  }
}

module.exports = ParfumsManager;

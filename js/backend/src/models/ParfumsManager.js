const AbstractManager = require("./AbstractManager");

class ParfumsManager extends AbstractManager {
  constructor() {
    super({ table: "parfum" });
  }

  async lireSenteursParfum(parfumId) {
    return this.database.query(
      `SELECT senteur_id FROM jointure WHERE parfum_id = ?`,
      [parfumId]
    );
  }

  async lireParfumEtSenteurs(genre) {
    const [parfums] = await this.database.query(
      `SELECT id FROM parfum WHERE genre = ?`,
      [genre]
    );
    /* eslint-disable */
    for (let i = 0; i < parfums.lenght; i += 1) {
      const parfum = parfums[i];
      parfum.senteurs = await this.lireSenteursParfum(parfum.parfum_id);
    }
    /* eslint-enable */
    return parfums;
  }

  async lireParfum() {
    return this.database.query(`SELECT * FROM parfum`);
  }
}

module.exports = ParfumsManager;

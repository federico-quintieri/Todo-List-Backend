// 1 Importo le dipendenze
const mysql = require("mysql2");
require("dotenv").config();

// 2 Controllo di aver collegato correttamente le variabili d'ambiente
// console.log("MYSQL_PASSWORD is: ", process.env.MYSQL_HOST);
// console.log("MYSQL_PASSWORD is: ", process.env.MYSQL_USER);
// console.log("MYSQL_PASSWORD is: ", process.env.MYSQL_PASSWORD);
// console.log("MYSQL_PASSWORD is: ", process.env.MYSQL_DB);

// 3 Creo pool connessioni a database
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

// 4 Creo funzioni che usano le query

// Mostra tutte le row
async function query_Index() {
  const [rows] = await pool.query("SELECT * FROM activities");
  return rows;
}

// Mostra una row specifica in base all'ID
async function query_Show(id) {
  const [rows] = await pool.query(`SELECT * FROM activities WHERE ID = ?`, [
    id,
  ]);
  // It returns me the first object instead of a an array with just one object
  return rows[0];
}

// Inserisce una row
async function query_Store(nome, scadenza) {
  await pool.query(`INSERT INTO activities(nome,scadenza) VALUES(?,?)`, [
    nome,
    scadenza,
  ]);
}

// 5 Esporto queste funzioni in un oggetto
module.exports = { query_Index, query_Show, query_Store };

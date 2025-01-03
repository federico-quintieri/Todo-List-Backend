// 1 Importo dipendenze
const express = require("express");
const router = express.Router();
const db = require("../db_connection");

// 2 Definisco endpoint con callback direttamente qui

// INDEX
router.get("/", async (req, res) => {
  try {
    const rows = await db.query_Index();
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const row = await db.query_Show(id);
    res.json(row);
  } catch (error) {
    console.error("Error in show endpoint", error);
    res.status(500).json("Internal error in server");
  }
});

// STORE
router.post("/", async (req, res) => {
  try {
    // Destrutturo property nome scadenza di oggetto passato da front-end
    const { nome, scadenza } = req.body;
    // Queste variabili le uso nel metodo che invia la query di inserimento row
    const insertId = await db.query_Store(nome, scadenza); // Ottieni l'ID
    res.json("Inserita row in DB, controlla"); // Invia oggetto completo
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await db.query_Delete(id);
    res.json({ message: "Activity deleted succesfully" });
  } catch (error) {
    console.error("Error deleting activity:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 3 Esporto la mia istanza router
module.exports = router;

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
  res.json("Endpoint show");
});

// STORE
router.post("/", async (req, res) => {
  try {
    await db.query_Store("Jason", "2025-05-05");
    res.json("Inserita row in DB, controlla");
  } catch (error) {
    console.error("Error inserting row:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 3 Esporto la mia istanza router
module.exports = router;

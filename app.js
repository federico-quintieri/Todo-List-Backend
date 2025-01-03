// 1 Importiamo le dipendenze
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./routes/activitiesRoute");

// 2 Configuro cors per autorizzare un certo dominio frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Sostituisci con il dominio del tuo frontend
  })
);

// 3 Middleware per convertire in JSON il body
app.use(express.json());

// 4 Definizione Rotta
app.use("/activities", router);

// 5 Mettiamo in ascolto il server
app.listen(port, () => {
  console.log(`Sono in ascolto alla porta numero ${port}`);
});

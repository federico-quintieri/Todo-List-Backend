// 1 Importiamo le dipendenze
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/activitiesRoute");

// 2 Middleware per convertire in JSON il body
app.use(express.json());

// 3 Definizione Rotta
app.use("/activities", router);

// 4 Mettiamo in ascolto il server
app.listen(port, () => {
  console.log(`Sono in ascolto alla porta numero ${port}`);
});

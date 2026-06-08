const express = require("express");
const { Client } = require("pg");
const app = express();

const client = new Client({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "desafio2",
});

client
  .connect()
  .then(() => console.log("Conectado ao banco!"))
  .catch((err) => console.error("Erro ao conectar:", err));

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/db", async (req, res) => {
  try {
    const result = await client.query("SELECT NOW()");
    res.json({ hora: result.rows[0].now });
  } catch (err) {
    res.status(500).send("Erro consultando banco");
  }
});

app.listen(3001, () => console.log("Backend rodando na porta 3001"));
const express = require("express");
const app = express();

const appName = "info-diabets";
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + `/dist/${appName}`));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + `/dist/${appName}/index.html`);
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta " + PORT);
});

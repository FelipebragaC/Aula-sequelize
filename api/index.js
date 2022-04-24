const express = require ("express");
const bodyParser = require ("body-parser");
const rotas = require ('./view/rotas.js')

const app = express();
rotas(app);
app.use(bodyParser.json());

const port = process.env.port||4000;

//3306

app.listen(port, ()=> console.log(`servidor escutando na porta ${port}`));

//app.get('/teste', )

module.exports = app

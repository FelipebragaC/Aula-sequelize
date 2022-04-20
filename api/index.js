const express = require ("express");
const bodyparse = ("body-parser");


const app = express();

app.use(bodyparse.json());

const port = process.env.port||4000;

//3306

app.listen(port, ()=> console.log(`servidor escutando na porta ${port}`));

//app.get('/teste', )



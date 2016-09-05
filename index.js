import express from "express"; //importando módulo express
import consign from "consign";

const app = express();

app.set("json spaces", 4); //formatando dados fixos para organização da API

//carrega rotas
consign()
	.include("models")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);
	

app.get("/", (req, res) => res.json({status: "ZTask API"}));

//retornando informações de conexão no start do serviço
//app.listen(PORT, () => console.log(`ZTask API - porta ${PORT}`));

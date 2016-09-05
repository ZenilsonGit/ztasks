// carrega toda a lógica de middlewares e configurações específicas do Express
// configura a porta do servidor via função app.set("port", 3000)
// configura a formatação da exibição da listagem de tarefas via função app.set("json spaces", 4)
module.exports = app => {
	app.set("port", 3000);
	app.set("json spaces", 4);
};

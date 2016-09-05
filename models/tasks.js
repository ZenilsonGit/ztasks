// rota para endpoint ~/models/tasks.js
// modelo com dados estáticos que ajuda a finalizar a etapa de carregamento dos módulos
/*
* params -> envia filtros de pesquisa SQL
* callbak -> retorna de forma assíncrona um array com a listagem de tarefas
*/
module.exports = app =>{
	return{
		findAll: (params, callback) =>{
			return callback([
				{title : "Fazer compras"},
				{title : "Consertar o PC"},
			]);
		}
	};
};

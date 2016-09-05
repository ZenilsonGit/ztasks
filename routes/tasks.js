// rota para endpoint tasks
// {} = valor da variável params (~/models/tasks.js)
// O callback dessa função retorna em seu parâmetro a variável tasks que
// foi criada com valores estáticos dentro do modelo models/tasks.js .
module.exports = app => {
	const Tasks = app.models.tasks;
	app.get("/tasks", (req, res) => {
		Tasks.findAll({}, (tasks) => {
		res.json({tasks: tasks});
	});
	});
};

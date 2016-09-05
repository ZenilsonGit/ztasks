module.exports = app => {
	app.listen(app.get("port"), () => {
		console.log(`ZTask API - porta ${app.get("port")}`);
	});
};

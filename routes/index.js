//rota para index.js
module.exports = app =>{
	app.get("/", (req, res) => {
		res.json({status: "ZTask API"});
	});
};

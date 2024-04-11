const dbConnection = require("../db/dbConfig");

const post_answer = async (req, res) => {
	const { answer } = req.body;
	const question_id = req.params.questions_id;
	const userid = req.user.userid;

	if (!answer) {
		return res.status(300).json({ msg: "provide answer field" });
	}
	try {
		await dbConnection.query(
			"INSERT INTO answers(question_id,user_id, answer  ) value(?,?,?)",
			[question_id, userid, answer]
		);

		return res.status(200).json({ msg: "Answer posted successfully" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went to wrong try again later" });
	}
};

//answer controller
const get_answer = async (req, res) => {
	const question_id = req.params.questions_id;

	try {
		let [allAnswer] = await dbConnection.query(
			`SELECT answers.answer, users.username FROM answers INNER JOIN users ON answers.user_id = users.userid
WHERE answers.question_id = ?`,
			[question_id]
		);
		return res.status(200).json({ allAnswer });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went to wrong try again later" });
	}
};

module.exports = { post_answer, get_answer };

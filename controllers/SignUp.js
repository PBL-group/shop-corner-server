const User = require("../models/User")

const handleSignUp = async (req, res) => {
	try {
		const { name, email, username } = req.user

		const newUser = await new User.create({
			email, name , username
		}).save();

		console.log({name, email, newUser})

		res.status(200).json("successfully reached signup endpoint")
	} catch(error) {
		console.log(error)
		res.status(400).json("error on signup endpoint")
	}
}

module.exports = {
    handleSignUp
}  
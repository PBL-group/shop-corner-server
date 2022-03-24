const User = require("../models/User")

const handleSignIn = async (req, res) => {
	const { name, email } = req.user

	console.log(name, email)

	res.status(200).json("successfully reached signin endpoint")

	// const user = await User.findOneAndUpdate({email}, {name}, {new: true})

	// if(user){
	// 	res.status(200).json({
	// 		message: "sucessfully arrived at sign in endpoint",
	// 		user: user
	// 	})
	// } else {
	// 	res.status(404).json("user not found")
	// }
}

module.exports = {
    handleSignIn
}  
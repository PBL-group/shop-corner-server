const User = require("../models/User")

const handleSignIn = async (req, res) => {
	const { name, email } = req.user

	const newUser = await new User({
		email, name 
	}).save();

	res.json(newUser)
	// if user is not new

	const user = await User.findOneAndUpdate({email}, {name}, {new: true})

	if(user) {
		res.json(user)
 	} else {
		res.json("user isn't available in the database")
	 }
}

module.exports = {
    handleSignIn
}  
const {admin} = require('../firebase')

const authCheck = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
        req.user = { firebaseUser }
        next()
    } catch(error) {
        console.log(error)
        res.status(401).json("Invalid Token")
    }
}

module.exports = { authCheck }
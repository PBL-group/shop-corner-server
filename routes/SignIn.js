const { Router } = require("express")
const router = Router();
const { handleSignIn } = require('../controllers/SignIn')
const { authCheck } = require("../middlewares/AuthCheck")
router.post('/signin', authCheck, handleSignIn)

module.exports =  router 
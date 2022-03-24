const { Router } = require("express")
const router = Router();
const { handleSignUp } = require('../controllers/SignUp')
const { authCheck } = require("../middlewares/AuthCheck")
router.post('/signup', authCheck, handleSignUp)

module.exports =  router 
const { Router } = require("express")
const router = Router();
const { handleHomepage } = require('../controllers/Home')

router.get('/', (req, res) => { handleHomepage(req, res) })

module.exports =  router 
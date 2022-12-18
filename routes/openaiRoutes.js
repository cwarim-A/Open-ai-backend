const express = require("express")
const {generateImage} = require('../controllers/openaiController.js')

const router = express.Router()

router.post("/generateimage", generateImage)


module.exports = router;
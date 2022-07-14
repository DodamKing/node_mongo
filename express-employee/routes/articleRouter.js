const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('article로 들어옴')
})

module.exports = router
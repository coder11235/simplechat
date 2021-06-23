const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('get messages')
})

router.post('/', (req, res) => {
    res.send('posted message')
})

module.exports = router
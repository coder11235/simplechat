const router = require('express').Router()

const data = [{
    name: "uday",
    content: "test"
}]

router.get('/', (req, res) => {
    res.send(data)
})

router.post('/', (req, res) => {
    res.send('posted message')
})

module.exports = router
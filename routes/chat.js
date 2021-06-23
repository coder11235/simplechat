const router = require('express').Router()

const data = [{
    name: "uday",
    content: "test"
}]

router.get('/', (req, res) => {
    res.send(data)
})

router.post('/', (req, res) => {
    data.push({
        name: req.body.name,
        content: req.body.content
    })
    res.send('posted messag')
})

module.exports = router
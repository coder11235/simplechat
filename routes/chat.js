const router = require('express').Router()
const push = require('pusher')

const pusher = new push(require('../config/pusher').pusherconfig)

const data = [{
    name: "uday",
    content: "test"
}]

router.get('/', (req, res) => {
    res.send(data)
})

router.post('/', (req, res) => {
    if(req.body.name && req.body.content)
    {
        data.push({
            name: req.body.name,
            content: req.body.content
        })
        pusher.trigger('default', 'recv_msg', {
            message: {
                name: req.body.name,
                content: req.body.content
            }
        })
        res.status(200).send({message: "successfull"})
    }
    else {
        res.status(400).send({message: "didnt provide name or content"})
    }
})

module.exports = router
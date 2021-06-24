const router = require('express').Router()
const push = require('pusher')
const { getAllMessages, addMessage } = require('../models/Message')

const pusher = new push(require('../config/pusher').pusherconfig)

router.get('/', (req, res) => {
    let data = getAllMessages().then(data => {
        res.send(data)
    })
})

router.post('/', (req, res) => {
    if(req.body.name && req.body.content)
    {
        addMessage(req.body.name, req.body.content);
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
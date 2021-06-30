const router = require('express').Router()
const push = require('pusher')
const { getAllMessages, addMessage } = require('../models/Message')

const pusher = new push(require('../config/pusher').pusherconfig)

router.get('/', (req, res) => {
    getAllMessages(req.body.channel, (err, data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.post('/', (req, res) => {
    if(req.body.name && req.body.content && req.body.channel)
    {
        addMessage(req.body.name, req.body.content, req.body.channel);
        pusher.trigger(req.body.channel, 'recv_msg', {
            message: {
                name: req.body.name,
                content: req.body.content,
            }
        })
        res.status(200).send({message: "successfull"})
    }
    else {
        res.status(400).send({message: "didnt provide name or content"})
    }
})

module.exports = router
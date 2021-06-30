const mon = require('mongoose')
const { url, user, pass } = require('../config/database')
let messageSchema = new mon.Schema({
    name: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    channel: {
        required: true,
        type: String
    }
})

let messg = module.exports = mon.model('Messages', messageSchema)

module.exports.connect = () => {
    mon.connect(url, {
        user: user,
        pass: pass
    })
}

module.exports.getAllMessages = (channel, callback) => {
    messg.find({'channel': channel}).select('content name').exec(callback)
}

module.exports.addMessage = (name, content, channel) => {
    let msg = new messg({name: name, content: content, channel})
    msg.save();
}
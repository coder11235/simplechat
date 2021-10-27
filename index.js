const exp = require('express')()
const bp = require('body-parser')
const { connect } = require('./models/Message')

exp.use(require('cors')())
exp.use(bp.json())
exp.use(bp.urlencoded({extended: false}))
// exp.use(require('morgan')('dev'))

exp.use('/chat', require('./routes/chat'))

connect();

exp.listen(8080, () => console.log('listening'))
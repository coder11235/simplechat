const exp = require('express')()
const bp = require('body-parser')

exp.use(require('cors')())
exp.use(bp.json())
exp.use(bp.urlencoded({extended: false}))
exp.use(require('morgan')('dev'))

exp.use('/chat', require('./routes/chat'))

exp.listen(8080, () => console.log('listening'))
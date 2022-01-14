const expressRouter = require('express')
const router = expressRouter.Router()
const callControllers = require('./controllers/callControllers')

router.route('/calls')
    .post(callControllers.createCall)

module.exports = router
const expressRouter = require('express')
const router = expressRouter.Router()
const callControllers = require('./controllers/callControllers')
const userControllers = require('./controllers/userControllers')

router.route('/calls')
    .post(callControllers.createCall)
    .get(callControllers.getAllCalls)

router.route('/call/:id')
    .get(callControllers.getCallByID)
    .delete(callControllers.deleteCallById)

router.route('/signup')
    .post(userControllers.signup)

module.exports = router
const expressRouter = require('express')
const router = expressRouter.Router()
const callControllers = require('./controllers/callControllers')
const userControllers = require('./controllers/userControllers')

// CALLS ENDPOINTS
router.route('/calls')
    .post(callControllers.createCall)
    .get(callControllers.getAllCalls)

router.route('/call/:id')
    .get(callControllers.getCallByID)
    .delete(callControllers.deleteCallById)

// USERS ENDPOINTS
router.route('/signup')
    .post(userControllers.signup)

router.route('/confirm-registration')
    .post(userControllers.confirmRegistration)

router.route('/login')
    .post(userControllers.login)

export default router
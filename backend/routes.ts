const expressRouter = require('express')
const router = expressRouter.Router()
// const callControllers = require('./controllers/callControllers')
const userControllers = require('./controllers/userControllers')
import setCredentials from './config/setCredentials'

// CALLS ENDPOINTS
// router.route('/calls')
//     .post(setCredentials, callControllers.createCall)
//     .get(setCredentials, callControllers.getAllCalls)

// router.route('/call/:id')
//     .get(setCredentials, callControllers.getCallByID)
//     .delete(setCredentials, callControllers.deleteCallById)

// USERS ENDPOINTS
router.route('/signup')
    .post(userControllers.signup)

router.route('/confirm-registration')
    .post(userControllers.confirmRegistration)

router.route('/login')
    .post(userControllers.login)

module.exports = router
const expressRouter = require('express')
const router = expressRouter.Router()
const callControllers = require('./controllers/callControllers')

router.route('/calls')
    .post(callControllers.createCall)
    .get(callControllers.getCalls)

router.route('/call/:id')
    .get(callControllers.getCallByID)
    .delete(callControllers.deleteCallById)

module.exports = router
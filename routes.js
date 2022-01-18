"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressRouter = require('express');
const callControllers = require('./controllers/callControllers');
const userControllers = require('./controllers/userControllers');
const router = expressRouter.Router();
// CALLS ENDPOINTS
router.route('/calls')
    .post(callControllers.createCall)
    .get(callControllers.getAllCalls);
router.route('/call/:id')
    .get(callControllers.getCallByID)
    .delete(callControllers.deleteCallById);
// USERS ENDPOINTS
router.route('/signup')
    .post(userControllers.signup);
router.route('/confirm-registration')
    .post(userControllers.confirmRegistration);
router.route('/login')
    .post(userControllers.login);
router.route('/logout')
    .get(userControllers.logout);
exports.default = router;

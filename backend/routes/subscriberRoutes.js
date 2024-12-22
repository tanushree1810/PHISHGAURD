import express from 'express';
import { subscribeUser, unsubscribeUser } from '../controllers/subscriberController.js';

const NewRouter = express.Router();

NewRouter.post('/subscribe', subscribeUser);
NewRouter.post('/unsubscribe', unsubscribeUser);

export default NewRouter;

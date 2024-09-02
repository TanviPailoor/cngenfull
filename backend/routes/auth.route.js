import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import upload from '../middlewares/multer/multer.js';
const route = express.Router();
route.post('/login', login);
route.post('/register', upload.single('image'), register);

export default route;

import express from "express"
import bodyParser from "body-parser"
import mongoose from 'mongoose';
import cors from 'cors';
import { SignUp, Login,Forgot_pass,Resetpass_OTP } from '../server/controller/User.js';

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

app.post('/Sign-Up',SignUp )
app.post('/Login', Login)
app.post('/Forgot_pass', Forgot_pass)
app.post('/Resetpass_OTP', Resetpass_OTP)

app.listen(3000, () => {
    console.log(`Backend Running At Port 3000`)
})
import { model } from 'mongoose';

export default model('User',
 { email: String, password: String, otp: Number });


import UserModel from '../models/user.js'
import nodemailer from 'nodemailer'

export const SignUp =(req,res)=>{
console.log(req.body)

    // email should not exist alreday

    const newUser = new UserModel({
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then(() => {
        res.send({ code: 200, message: 'Signup success' })
    }).catch((err) => {
        res.send({ code: 500, message: 'Signup Err' })
    })
};


//Login page
export const Login = (req, res) => {
    console.log(req.body.email)

    // email and password match

    UserModel.findOne({ email: req.body.email })
        .then(result => {
            console.log(result, '11')

            // match password with req.body.password
            if (result.password !== req.body.password) {
                res.send({ code: 404, message: 'password wrong' })
            } else {
                res.send({
                    email: result.email,
                    code: 200,
                    message: 'user Found',
                    token: 'hfgdhg'
                })
            }

        })
        .catch(err => {
            console.log(err);
            
            res.send({ code: 500, message: 'user not found' })
        })

}

export const Forgot_pass = async (req, res) => {
    console.log(req.body)
    const _otp = Math.floor(100000 + Math.random() * 900000)
    console.log(_otp)
    let user = await UserModel.findOne({ email: req.body.email })
    // send to user mail
    if (!user) {
        res.send({ code: 500, message: 'user not found' })
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
          service: "gmail",
        auth: {
            user:"auth808@gmail.com",
            pass:"jtkt lsqf gcgl qtef" 
        }
    })

    let info = await transporter.sendMail({
        from: 'auth808@gmail.com',
        to: req.body.email, // list of receivers
        subject: "OTP", // Subject line
        text: String(_otp),
    })

    if (info.messageId) {

        console.log(info, 84)
        UserModel.updateOne({ email: req.body.email }, { otp: _otp })
            .then(result => {
                res.send({ code: 200, message: 'otp send' })
            })
            .catch(err => {
                res.send({ code: 500, message: 'Server err' })

            })

    } else {
        res.send({ code: 500, message: 'Server err' })
    }
}

export const Resetpass_OTP = (req, res) => {
    console.log(req.body)
      

    UserModel.findOne({ otp: req.body.OTP }).then(result => {
            
        //  update the password 

        UserModel.findOneAndUpdate({ otp: req.body.OTP }, { password: req.body.password })
            .then(result => {
                res.send({ code: 200, message: 'Password updated' })
            })
            .catch(err => {
                res.send({ code: 500, message: 'Server err' })

            })


    }).catch(err => {
        res.send({ code: 500, message: 'otp is wrong' })

    })


}
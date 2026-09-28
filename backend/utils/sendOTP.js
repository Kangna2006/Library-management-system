import {createTransport} from "nodemailer"

const sendOTP= async (email,otp)=>{
    const transporter=createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to:email,
        subject:"Your otp code",
        html:`<h2>Your OTP is ${otp}</h2>`
    })
}
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS ? "App Password Loaded" : "No App Password");
export default sendOTP
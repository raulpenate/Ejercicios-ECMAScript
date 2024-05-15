const nodemailer  = require("nodemailer")
const dotenv = require('dotenv')

dotenv.config()
const env = process.env

    console.log(env)
const transporter = nodemailer.createTransport({
    host: env.HOST,
    port: 587,
    secure: false,
    auth: {
        user: env.EMAIL,
        pass: env.PASSWORD
    }

})

async function main(){
    const info = await transporter.sendMail({
        from: env.EMAIL,
        to: env.TO,
        subject: "Correo enviado por Raúl Peñate",
        body: "Correo prueba"
    })

    console.log(info.messageID);
}

main().catch(console.error)
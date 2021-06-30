const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendMail = async ({to, subject, text = "", html = ""})=> {
    const mail = {
        to,
        from: "bogdan.lyamzin.d@gmail.com",
        subject,
        text,
        html
    };
    try {
        const result = await sgMail.send(mail);
        return result;
    }
    catch(error){
        // if(error.message === ""){

        // }
        console.log(error);
        error.message = `Email not send. Reason - ${error.message}`;
        throw error;
    }
}

module.exports = sendMail;
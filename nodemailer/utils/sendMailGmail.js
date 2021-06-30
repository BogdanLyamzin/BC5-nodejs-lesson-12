const nodemailer = require("nodemailer");

const {nodemailerGmailConfig} = require("../configs");

const transporter = nodemailer.createTransport(nodemailerGmailConfig);

const sendGmailMail = async({to, subject, text}) => {
    const email = {
        to,
        from: "info@sled-studio.com",
        subject,
        text
    };

    try {
        const result = await transporter.sendMail(email);
        return result;
    }
    catch(error){
        throw error;
    }
}

module.exports = sendGmailMail;
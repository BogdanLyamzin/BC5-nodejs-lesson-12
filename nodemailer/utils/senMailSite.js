const nodemailer = require("nodemailer");

const {nodemailerSiteConfig} = require("../configs");

const transporter = nodemailer.createTransport(nodemailerSiteConfig);

const sendSiteMail = async({to, subject, text}) => {
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

module.exports = sendSiteMail;
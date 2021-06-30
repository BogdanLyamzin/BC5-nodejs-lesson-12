require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const config = {
    host: "mail.adm.tools",
    port: 25,
    secure: false,
    auth: {
        user: "info@sled-studio.com",
        pass: EMAIL_PASSWORD
    }
};

module.exports = config;
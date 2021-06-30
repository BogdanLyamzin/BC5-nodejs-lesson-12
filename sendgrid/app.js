const {sendMail} = require("./utils");

const mail = {
    to: "bogdan.lyamzin.d@gmail.com",
    subject: "Тестовое письмо с SendGrid",
    text: "Текстовое содержимое письмо",
    html: "<strong>HTML</strong> содержимое письма"
};

sendMail(mail);
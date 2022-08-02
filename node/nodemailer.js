var mail = require('nodemailer');

var transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        user: 'yumjiree1723@gmail.com',
        pass: '**********'
    }
});

var mailOptions = {
    from: 'yumjiree1723@gmail.com',
    to: 'ychinbat@miu.edu',
    subject: ' Hello World!',
    text: ' Im node hello yumjir! '
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(Error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
// IMPORTS
const nodemailer = require("nodemailer");

// CONTROL FUNCTIONS

// 1. new mail
const newMail = (req, res) => {
    // render create form view
    res.render("mailer/new", { title: "Send Mail" });
};

// 2. create mail
const createMail = (req, res) => {
    // destructure data from req body
    const { to, subject, text } = req.body;
    // create mail transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.MAIL_USERNAME,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });

    // create mail options
    const mailOptions = {
        from: "joehinmoro@gmail.com",
        to,
        subject,
        text,
    };

    // send mail using transporter
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            // handle error
            console.log("Error " + err);
            // render mailer error page
            res.render("mailer/error", { title: "Something Went Wrong" });
        } else {
            // if email send success
            console.log("Email sent successfully");
            // render mailer success page
            res.render("mailer/success", { title: "Mail Sent" });
        }
    });
};

// 3. 404 ctrl func
const _404 = (req, res) => {
    // render 404 view
    res.render("mailer/_404", { title: "404 Not Found" });
};

// EXPORTS
module.exports = { newMail, createMail, _404 };

// IMPORTS
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// ROUTES
// 1. NEW route (GET)
router.get("/", (req, res) => {
    // define view data
    const title = "Send Mail";
    // render create form view
    res.render("mailer", { title });
});

// 2. CREATE route (POST)
router.post("/", (req, res) => {
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
            // pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: "joehinmoro@gmail.com",
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("Error " + err);
            res.render("mailer/error", { title: "Something Went Wrong" });
        } else {
            console.log("Email sent successfully");
            res.send("mailer/success", { title: "Mail Sent" });
        }
    });
});

// 3. 404 Route
router.use((req, res) => {
    // render 404 view
    res.render("mailer/_404");
});

// EXPORTS
module.exports = router;

# ts-mailer-nodemailer
Simple typescript mailer implementation using nodemailer and handlebars for templating

# Running
You will first have to install dependencies. I used yarn but you can use npm.
```
yarn
```
Once the dependencies are installed. Just run ```nodemon``` on your favorite terminal and the server will be up and running.

You will need to create a __config.ts__ file which will contain the following
```javascript
export default {
  port: 5000, // Server port
  smtpHost: , // SMTP host (String)
  smtpPort: , // SMTO port (Number)
  emailUsername: , // The email or credentials used for logging into your smtp server (String)
  emailPassword: , // Password for logging in (String)
};
```

*Cheers!*

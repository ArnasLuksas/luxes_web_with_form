const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();

app.locals.layout = false;

//Static files
app.use(express.static('public'));
app.use('/scss', express.static(__dirname + 'public/scss'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/gallery', express.static(__dirname + 'public/gallery'));

//Body parser Middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render('index');
});
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/namu_statyba', (req, res) => {
  res.render('namu_statyba');
});

app.get('/kontaktai', (req, res) => {
  res.render('kontaktai');
});
app.get('/aliuminiai_langai', (req, res) => {
  res.render('aliuminiai_langai');
});
app.get('/durys', (req, res) => {
  res.render('durys');
});
app.get('/igyvendinti_projektai', (req, res) => {
  res.render('igyvendinti_projektai');
});
app.get('/langai_durys', (req, res) => {
  res.render('langai_durys');
});
app.get('/mediniai_langai', (req, res) => {
  res.render('mediniai_langai');
});
app.get('/plastikiniai_langai', (req, res) => {
  res.render('plastikiniai_langai');
});

app.post('/send', (req, res) => {
  const output = `
    <p>Gavote žinutę iš kliento</p>
    <h3>Kontaktiniai duomenys</h3>
    <ul>
        <li>Vardas: ${req.body.name}</li>
        <li>El. paštas: ${req.body.email}</li>
        <li>Tel.: ${req.body.phone}</li>
    </ul>
    <h3>Žinutė</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: '.serveriai.lt',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'xxx', // generated ethereal user
      pass: 'xxx' // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: "'Žinutė is xxx puslapio formos' <xxx@xxx.lt>", // sender address
    to: 'xxx, xxx', // list of receivers
    subject: 'Kliento žinutė', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('kontaktai');
  });
});

app.listen(5000, () => console.log('Server started..'));

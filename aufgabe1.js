const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send(`
    <html>
    <head>
      <title>Formular</title>
    </head>
    <body>
      <h1>Formular für Übung 78!</h1>
      <form action="/formdata" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="age">Alter:</label>
        <input type="number" id="age" name="age" required><br><br>
        <input type="submit" value="Absenden">
      </form>
    </body>
    </html>
  `);
});


//Grundgerüst Express
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000);


//UUID
// app.get('/uuid', function (req, res) {
//   const { v4: uuidv4 } = require('uuid');
//   const uuid = uuidv4();
//   res.send(uuid);
// });

// app.listen(3000);

//Useragents
// app.get('/user-agent', function (req, res) {
//   const userAgent = req.headers['user-agent'];
//   res.send(userAgent);
// });

// app.listen(3000);


// //Header
// app.get('/headers', function (req, res) {
//   res.json(req.headers);
// });

// app.listen(3000);


// //URL
// app.get('/url', function (req, res) {
//   const url = req.url;
//   res.send(url);
// });


// app.listen(3000);


// //JSON
// app.get('/json', function (req, res) {
//   const data = {
//     person: {
//       Name: 'Basti',
//       Alter: 30
//     }
//   };
//   res.json(data);
// });

// app.listen(3000);


//XML
// app.get('/xml', function (req, res) {
//   const xml = '<Person><Name>Basti</Name><Alter>30</Alter></Person>';
//   res.send(xml);
// });

// app.listen(3000);


//HTML Form
app.post('/formdata', function (req, res) {
  const formData = req.body;
  console.log(formData);
  res.send('Forumlar wurde erfolgreich übersendet!');
});

app.listen(3000);
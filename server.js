/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

var path = require('path');
var express = require('express');
var xpbar = require('express-handlebars');
var postData = require('./postData.json');
console.log("==postaData:", postData);
const { nextTick } = require('process');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', xpbar.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.get('/', function (req, res) {
  var singlepostData = postData[post]

  if(singlepostData){
    res.status(200).render('homepage', {
      price: postData.name,
      city: postData.city,
      condition: postData.condition,
      url: postData.photoURL,
      description: postData.description
  })
} else {
  next();
}
  
});

app.get('/posts/1', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 500,
    "city": "Eugene",
    "condition": "poor",
    "url": "https://i.pinimg.com/originals/07/e0/8c/07e08c1195f197dab954a89723339b3b.jpg",
    "description": "Super nice laptop"
  })
});

app.get('/posts/2', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 20,
    "city": "Corvallis",
    "condition": "excellent",
    "url": "https://p1.pxfuel.com/preview/998/294/512/meadow-yellow-rain-coat-mountains.jpg",
    "description": "Yellow Raincoat"
  })
});

app.get('/posts/3', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 100,
    "city": "Portland",
    "condition": "new",
    "url": "http://static-21.sinclairstoryline.com/resources/media/9e359e52-2d79-4aa6-a43b-2ba534b9db0c-large16x9_378b19aa394049a4a9ca7101e4e75be4voodoodoughnutrecord660.jpg?1463527394583",
    "description": "Very large pile of interesting donuts"
  })
});

app.get('/posts/4', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 250,
    "city": "Salem",
    "condition": "fair",
    "url": "http://static.legalsolutions.thomsonreuters.com/product_photos/p40307624-141728L.jpg",
    "description": "Oregon laws"
  })
});

app.get('/posts/5', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 1,
    "city": "Bend",
    "condition": "new",
    "url": "http://i.huffpost.com/gen/1573833/images/o-SUNSHINE-facebook.jpg",
    "description": "Sunshine"
  })
});

app.get('/posts/6', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 99,
    "city": "Portland",
    "condition": "fair",
    "url": "http://www.portlandhipster.com/wp-content/uploads/2015/09/hipsters.jpg",
    "description": "Hipsters"
  })
});

app.get('/posts/7', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 20000000,
    "city": "Eugene",
    "condition": "good",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/102707-Oregon-AutzenStadium-ext.jpg/1200px-102707-Oregon-AutzenStadium-ext.jpg",
    "description": "Football stadium (we kind of want to build a new one)"
  })
});

app.get('/posts/8', function (req, res) {
  res.status(200).render('partials/post',{
    "price": 10000,
    "city": "Corvallis",
    "condition": "excellent",
    "url": "https://farm2.staticflickr.com/1258/1366422925_25663f44c8_z.jpg",
    "description": "Very nice farmer's market"
  })
});

app.get('*', function (req, res) {
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  res.status(404).render('404', {
    url: req.url
  })
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

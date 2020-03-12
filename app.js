const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine','ejs');

app.get('/',function(req, res) {  
  res.render('index');
});

app.get('/gallery',function(req, res) {  
  res.render('gallery');
});



app.use(express.static(path.join(__dirname, 'public')));


//error handling
app.use(function (req, res, next) {
  res.status(404);
  res.send('404: Not Found');
});

//server running on port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
const express = require('express');
const app = express();

// express.static('/');
// app.use(express.static('public'))

app.get('/', function (req,res){
    res.send('Helllo World');
})

app.listen(process.env.PORT, function(){
  console.log('check out dis on port something');
})
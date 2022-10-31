const express = require('express');
const app = express();

const port = process.env.PORT || 8000;



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));


app.get('/', ((req,res)=>{
    res.render('index');
}))
app.get('/weather', ((req,res)=>{
    res.render('weather');
}))
app.get('*', ((req,res)=>{
    res.render('404');
}))





app.listen(port,()=>{
  console.log("server running at " + port);
})

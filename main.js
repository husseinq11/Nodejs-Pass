const express =require('express');
const bodyParser =require('body-parser');
const https= require('https');
const { runInNewContext } = require('vm');
 
const app =express();
app.use(bodyParser.urlendcoded({extended:true}));
app.get('/',function(req,res){
    const url="https://v2.jokeapi.dev/joke/Any?type=single";
    https.get(url.function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const te=JSON.parse(data)
            decs=te.weather[0].description
            tep=te.main.temp
            res.write(tep)
            res.write(decs)
            res.send()
        })
    })
})

app.listen(2000)
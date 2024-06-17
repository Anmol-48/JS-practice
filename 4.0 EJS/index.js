import express from "express";

const app=express();
const port=3000;

app.get('/',(req,res)=>{

    const d=new Date();
    const day=d.getDay();
    
    let type="weekday";
    let advice="work hard";
    
    if(day==0 || day==6){
        type="weekend";
        advice="lets fun";
    }
    
    res.render("index.ejs",{
        days: type,
        sentence: advice,
    });
});

app.listen(port,()=>{
    console.log("Listening on port ",port);
});
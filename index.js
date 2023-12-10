const express=require('express');
const app=express();
const port=3000;



app.get('/',(req,res)=>{
    res.send('Hello World!');
}
);


app.get('/health',(req,res)=>{
    res.status(200).json({status:'UP'});
}
);

app.get('/info',(req,res)=>{
    res.status(200).json({app:'Example',version:'1.0.0'});
}
);


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
}
);

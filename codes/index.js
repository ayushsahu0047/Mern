const express = require("express");

const app = express();

app.get('/',(req,res) =>{
    res.json({Hello:'Waorld'});

});
app.post ('/run',(req,res)=>{
    const{language ="cpp",code } =req.body
    if(code===undefined){
        return res.status(400).json({sucess:false,error:"Empty code body"})
    }
    //Need to generate a C++ file with content from the request
    // we need to run the file and send the response
    return res.json({language,code});
});

app.listen(1000,() =>{
    console.log(`Listening on port 5000!`);

});

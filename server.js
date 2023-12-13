import express from 'express';
import bodyParser from 'express'

const app = express();

app.use(bodyParser.json());
const arr = [];
// C R U D 
// C = Create --> Post Method
// R = Read --> Get Method
// U = Update --> Put Method
// D - Delete -->Delete Method
app.listen(5000,console.log("Server is running on port"));



// Read
app.get('/',(req,res)=>{
    console.log("This is Home Route")
    res.send({
        product:[],
        marvel:'ads',
        data:arr

    });
})
app.get('/superman',(req,res)=>{
    console.log("This is Superrman")
    console.log("This is Home Route")
    res.send({
        product:[],
        DC:"`Superman route.............."
        
        
    })
})

//Create
app.post('/userData',(req,res)=>
{
    console.log("Server in user data post method is working")
    const data = req.body
    console.log(req.body)
    arr.push(data);

})





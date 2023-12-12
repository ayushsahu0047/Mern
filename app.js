import http from 'http';
const server = http.createServer((req,res) => {
    if(req.url ==="/ayush"){  
          res.end ("Welcome to ayush");
}
else if(req.url ==="/Home"){  
    res.end ("Welcome to Home");
}
else if(req.url ==="/Youtube"){  
    res.end ("Welcome to Youtube");
}

});
const port = 5000;
server.listen(port,()=>console.log(`Srver is running on port, ${port}`))
console.log(server);

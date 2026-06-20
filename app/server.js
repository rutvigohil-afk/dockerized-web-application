const express = require("express");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{

res.send(`
<h1>Dockerized Web Application</h1>

<p>Internship Project Successfully Running!</p>

`);

});

app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});
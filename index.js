const express = require("express");
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
})

app.put("/user/ankit",(req,res)=>{
    res.sendStatus(200);
})
app.patch("/user/ankit",(req,res)=>{
    res.sendStatus(200);
})

app.delete("/user/ankit",(req,res)=>{
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
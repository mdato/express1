const express = require("express");
const app= express();
const port=3000;

app.get('/',(req,res)=>{
  res.send('esta es the f...app!')
})

app.listen(port || 3000, () => {
  console.log("Server started on port: ",port);
});

module.exports = app;

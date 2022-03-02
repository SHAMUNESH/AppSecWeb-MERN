const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('This is a not World!')
})

app.post("/test", (req, res) => {
  
  // Retrieve array form post body
  var status = req.body.allow;  
  console.log(status);
  if (status){
    res.json({"status":"accepted"});
  } 
  else{
    res.json({"status":"rejected"});
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
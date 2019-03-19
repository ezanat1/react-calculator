const express = require("express");
const mathjs = require("mathjs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, X-Request-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.post("/path", (req, res) => {
  const val = req.body;
  const calc = mathjs.eval(val);

  // res.writeHead(200, {
  //   "Content-type": "application/json"
  // });
  res.send(JSON.stringify(calc));
});
// app.post('/calculate', function(req, res){

//   console.log('Inside Calculate method!');

//   var result = eval(req.body.expression);
//   res.writeHead(200,{
//       'Content-type':'application/json'
//   });
//   console.log("Result:", JSON.stringify(result));
//   res.end(JSON.stringify(result));

// });
app.listen(5000, () => {
  console.log("App listening on port 6000!");
});

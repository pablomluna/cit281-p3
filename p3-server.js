//import fs
const fs = require("fs");
//import fastify
const fastify = require("fastify")();
//import coinCoint
const { coinCount } = require("./p3-module.js");

fastify.get("/", (request, reply) => {
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) {
      reply
      .code(500)
    }
    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(data)
  });
});

fastify.get("/coin", (request, reply) => {
  const {denom = 0, count = 0} = request.query;

  const coin = {denom, count};
  const coinArray = [coin];
  const coinValue = coinCount(coinArray);

  reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

fastify.get("/coins", (request, reply) => {
  const firRst = request.query;
  const seCond = firRst.option
  const option = Number(seCond)

  console.log(typeof(option))
  if (option != [1,2,3]) {
    const coinValue = 0
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h2>Invalid option value is ${coinValue}</h2><br /><a href="/">Home</a>`);
  }
  var newOption; 

  switch (coinvalue){
  case 1:  newOption = coinCount([{ denom: 5, count: 3 }, { denom: 10, count: 2 }]);
    break;  
  case 2: newOption = coinCount([...coins]); 
    break; 
  }


  const coinValue = newOption
  const coinValue = newOption;



  reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
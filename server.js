const express = require("express");

const app = express();
app.use(express.static('client'));
app.use(express.json());
app.use(express.urlencoded());

/*
* "GET /lions": {
*   "desc":"return all lions",
*   "response": "200 application/json",
*   "data": [{}, {}, {}]
*  },
*
*  "GET /lions/:id": {
*   "desc": "return one lion represented by its id",
*   "response": "200 application/json",
*   "data": {}
*  },
*
*  "POST /lions": {
*   "desc": "create and return new lion using the posted object as lion",
*   "response": "201 application/json",
*   "data": {}
*  },
*
*  "PUT /lion/:id": {
*   "desc": "updates and return the matching lion with the updated object",
*   "response": "200 application/json",
*   "data": {}
*  },
*
* "DELETE /lions/:id": {
*   "desc": "deletes and returns the matching lion",
*   "response": "200 application/json",
*   "data": {}
* }
*
* lion object : {
    name: name,
    pride: pride,
    age: age,
    gender: gender
  };
* */
let lions = [];
let id = 0;
app.get("/lions", (req, res) => {
  throw new Error("My new erroe");
  throw new Error("My new erroe");
  res.json(lions);
});

app.post("/lions", (req, res) => {
  lions.push({id: id++, ...req.body});
  res.json(lions[lions.length-1]);
});

app.get("/lions/:id", (req, res) => {
  console.log(req.params.id);
  res.json(lions.filter(lion => lion.id == req.params.id));
})

app.put("/lions/:id", (req, res) => {
  console.log(req.body);
  lions = lions.map(lion => {
    if (lion.id == req.params.id) {
      lion = {...lion, ...req.body};
    }
    return lion;
  });
  res.json(lions);
})

app.delete("/lions/:id", (req,res) => {
  lions = lions.filter(lion => lion.id != req.params.id);
  res.json(lions);

});

app.use((err, req, res, next) => {
  console.log("Error in: ", req.method, req.url);
  console.log(err);
  res.json("Error");
});

app.listen(3000);
console.log("listening on PORT 3000");

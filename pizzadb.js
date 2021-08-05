const express = require("express");
const mongoclient = require("mongodb").MongoClient;
// const MongoClient = mongodb.MongoClient;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/order", (req, res) => {
  const url = "mongodb://localhost:27017";
  mongoclient.connect(url, (err, client) => {
    if (err) throw err;
    const db = client.db("mern");
    const collection = db.collection("pizza");
    collection.find().toArray((err, ingredients) => {
      res.json(ingredients);
      client.close();
    });
  });
});


app.listen(4000, () => console.log("server running"));
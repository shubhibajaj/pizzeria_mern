const express = require("express");
const mongoclient = require("mongodb").MongoClient;
// const MongoClient = mongodb.MongoClient;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/build", (req, res) => {
  const url = "mongodb://localhost:27017";
  mongoclient.connect(url, (err, client) => {
    if (err) throw err;
    const db = client.db("mern");
    const collection = db.collection("ingredients");
    collection.find().toArray((err, ingredients) => {
      res.json(ingredients);
      client.close();
    });
  });
});


app.listen(3500, () => console.log("server running"));
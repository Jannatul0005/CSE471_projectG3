// @ts-nocheck
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5501;



// middlewares
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ws4mpjc.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const userCollection = client.db("travelBD").collection("Users");
    //collectionsname
    app.post("/Users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    //Newcode
    app.get('/Users', async (req, res) => {
      try {
          const db = client.db('TravelBD');
          const collection = db.collection('Users');
          const items = await collection.find().toArray();
          res.json(items);
      } catch (err) {
          console.error('Error fetching Users:', err);
          res.status(500).send('Internal Server Error');
      }
  });
  
//get method 





    //await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
  app.get("/", (req, res) => {
    res.send("GhurifiriBD Server Is Running");
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
  
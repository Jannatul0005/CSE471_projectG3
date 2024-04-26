/////Controllers/index.js/////////////


const { User } = require('../Model/server');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require("path")
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


app.use(bodyParser.json())
app.use(express.static('View'))
app.use(bodyParser.urlencoded({
    extended:true
}))
 




// Serve static files from the "View" directory
app.use(express.static(path.join(__dirname, 'View')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'login.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'login.html'));

});

app.get('/addcart', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'package.html'));
});
app.get('/addcart', (req, res) => {
    res.sendFile(path.join(__dirname, 'View', 'booking.html'));

});

// Add more routes for other HTML files as needed







const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0..cpocfck.mongodb.net/?retryWrites=true&w=majority&appName=cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const db = mongoose.connection;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    const userCollection = client.db("travelBD470").collection("user");
    //collectionsname



    //login endpoint
    app.post("/login", async (req, res) => {
      const user = req.body;
      //try
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    //Newcode
    app.get('/login', async (req, res) => {
      try {
          const db = client.db('travelBD470');
          const collection = db.collection('user');
          const items = await collection.find().toArray();
          res.json(items);
      } catch (err) {
          console.error('Error fetching items:', err);
          res.status(500).send('Internal Server Error');
      }
  });
/*   const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    password: String
});
 */

//const User = mongoose.model('User', userSchema);


 // Signup endpoint
app.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store user in database
        await userCollection.insertOne({ email, password: hashedPassword });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



// Login endpoint
/* app.post("/login", async (req, res) => {
try {
  const { username, password } = req.body;
  console.log("username:", username)
  console.log("password:", password)
  res.send("saved email")


  app.post("/sign_up",(req,res) => {
    var name= req.body.name
    var age=req.body.age
    var email=req.body.email
    var phno=req.body.phno
   
    var password=req.body.password


    var data={
        "name":name,
        "age":age,
        "email":email,
        "phone":phno,
        "password":password
    }
    db.collection('user').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('signup_successful.html')
})


app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('login.html')
});
///


    // // Check if user exists
    // const user = await usersCollection.findOne({ email });
    // if (!user) {
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }




    // // Compare passwords
    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if (!passwordMatch) {
    //   return res.status(401).json({ message: "Invalid credentials" });
    // }




    // // Generate JWT token
    // const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });




    // res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}); */




// Protected route example
/* app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route" });
}); */


//add all pakaages
// Define a schema for the package
/* const packageSchema = new mongoose.Schema({
  packageName: String,
  packagePrice: String
});
 */

// Create a model based on the schema
/* const Package = mongoose.model('Package', packageSchema);


// Middleware to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); */


// Serve static files from the 'public' directory
app.use(express.static('View'));


// Route to handle form submission
app.post('/addcart', (req, res) => {
  // Create a new package instance using data from the form
  const newPackage = new Package({
      packageName: req.body.packageName,
      packagePrice: req.body.packagePrice
  });


  // Save the new package to the database
  newPackage.save((err, savedPackage) => {
      if (err) {
          console.error('Error saving package:', err);
          res.status(500).send('Internal Server Error');
      } else {
          console.log('Package saved successfully:', savedPackage);
          res.json(savedPackage); // Send a JSON response with the saved package
      }
  });
});




// Middleware to verify JWT token
/* function authenticateToken(req, res, next) {
const token = req.headers["authorization"];
if (!token) return res.status(401).json({ message: "Unauthorized" });




jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  if (err) return res.status(403).json({ message: "Forbidden" });
  req.user = user;
  next();
});
}
 */



// Error handling middleware for unmatched routes
/* app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
}); */


// Error handling middleware for internal server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Internal Server Error");
});


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
    res.send("TravelBD Server Is Running");
  });
 
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });







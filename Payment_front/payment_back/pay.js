// const MongoDB = require("Mongodb-nodejs")
// const Nodemailer =require ("Nodeemailer " )

 
// import form from where 

// const form=new Form
//         var listener- (not super, need to google )
//         all forms all data sents to a json (python dic)

//          valid the data 
//         MongoDB.sent data- transation id  
//         node emailer, transation id to receipt 

//         <Google my life out ! >

//             PaymentMethodChangeEvent.html


//             PaymentMethodChangeEvent.apply
// Pay   html 

const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const nodemailer = require('nodemailer');
const cors =require("cors")
const app = express();
app.use(express.json())
app.use(cors())
const port = 3000;


// const mongoUrl = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'paymentForm';

// // Nodemailer Transporter Configuration
// const transporter = nodemailer.createTransport({
//     // Update with your email service configuration
//     service: 'Gmail',
//     auth: {
//         user: 'your.email@gmail.com',
//         pass: 'yourpassword'
//     }
// });

// // Connect to MongoDB
// MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('Error connecting to MongoDB:', err);
//         return;
//     }
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);

//     // Define route to handle form submission
//     app.post('/submit-form', authenticate, (req, res) => {
//         const formData = req.body;

//         // Insert form data into MongoDB collection
//         db.collection('payments').insertOne(formData, async (err, result) => {
//             if (err) {
//                 console.error('Error inserting form data into MongoDB:', err);
//                 return res.status(500).json({ error: 'An internal server error occurred' });
//             }

//             console.log('Form data inserted into MongoDB');

//             try {
//                 // Send email notification
//                 await transporter.sendMail({
//                     from: 'your.email@gmail.com',
//                     to: 'recipient.email@example.com',
//                     subject: 'Form Submission Notification',
//                     text: 'A new form submission has been received.',
//                     html: '<p>A new form submission has been received.</p>'
//                 });

//                 console.log('Email notification sent');
//             } catch (error) {
//                 console.error('Error sending email notification:', error);
//                 return res.status(500).json({ error: 'An internal server error occurred' });
//             }

//             res.status(200).json({ message: 'Form submitted successfully' });
//         });
//     });
// });
app.get("/",(req,res)=>{
    return res.json("Life over");
});


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




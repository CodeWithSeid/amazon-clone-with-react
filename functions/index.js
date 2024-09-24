// const functions = require('firebase-functions');
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('<body style="background-color: aquamarine;"><h1 style="color: deepskyblue; text-align: center; margin-top: 220px; font-family: sans-serif;">👋 Hello world.</h1></body>'));
app.get('/evangadi', (request, response) => response.status(200).send('<body style="background-color: deepskyblue;"><h1 style="color: azure; text-align: center; margin-top: 220px; font-family: sans-serif;">👋 Hi , I learn evanagdi course.</h1></body>'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  if (total==0) {
    return
  }
  console.log('Payment Request Recieved for this amount >>> ', total);
  try {
    
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total),
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  } catch (error) {
    console.log(error.message)
    response.status(500).send("something went wrong")
  }
  

});
app.listen(5000,(err)=>{
  if (err) {
    console.log(err.messege)
  } else {
    console.log("listning to 5000")

  }
})
// exports.api = functions.https.onRequest(app);

// / = `http://127.0.0.1:5001/marketing-world-wide-website/us-central1/api`
// /evangadi = `http://127.0.0.1:5001/marketing-world-wide-website/us-central1/api`
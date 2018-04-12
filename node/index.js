//// Include required libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//// Controllers
const verificationController = require('./controllers/verification');
const messageWebhookController = require('./controllers/messageWebhook');

//// Listeners
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => console.log('Webhook server is listening, port 3000'));

app.get('/', verificationController);
app.post('/', messageWebhookController);
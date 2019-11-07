const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const publicVapidKey = 'BFSg33d2S3GoX8Sbu_OCKzRrTXFooFHBGhtfCltJpC6Vn9tjSnZ4RAMlFwdUAsCM-fIggOEt2S3AELq-CroZfQw';
const privateVapidKey = 'e4CzSxE6aDOv4Bz7DFk8N5buGCqEX6kNW3VynuLv_eI';

webpush.setVapidDetails('mailto:wadah-wleed@hotmail.com', publicVapidKey, privateVapidKey);

// Subscribe Route 
app.post('/subscribe', (req, res) => {
  // Get pushScribtion object
  const subscribtion = req.body;

  // Send 201 - resource was created successfully
  res.status(201).json({});

  // Create payload 
  const payload = JSON.stringify({
    title: 'push test'
  });

  // Pass the object into the send notification function
  webpush.sendNotification(subscribtion, payload).catch(err=> console.error(err));
})

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
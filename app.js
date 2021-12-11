const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/home.html')); //__dirname resolves to your project folder
});

router.get('/Hydra_Soak', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/hydrasoak.html'));
});

router.get('/Toastmate', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/toastmate.html'));
});

router.get('/Yo-Magic', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/yo-magic.html'));
});

router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/templates/about.html'));
});

//add the router
app.use('/', router);

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

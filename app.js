require('dotenv').config();
const path = require('path');
let cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
const port = process.env.port || 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/devices/:id', (req, res) => {
    
}); 

app.listen(port, () => {
    console.log("App is running on the port");
})
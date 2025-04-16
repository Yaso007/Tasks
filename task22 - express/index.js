const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

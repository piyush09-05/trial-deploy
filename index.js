const express = require('express');
const axios =  require('axios');
const app = express();

app.get('/', async(req,res) => {
    const result = await axios.get('https://superheroapi.com/api/accesscode/1')
    console.log(result.data.name);
    res.send(result.data.name);
});

app.listen(3000, () => {
        console.log("Server running at Port 3000");
})
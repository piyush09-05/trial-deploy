const express = require('express');
const axios =  require('axios');
const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', async(req,res) => {
    const result = await axios.get('https://superheroapi.com/api/accesscode/1')
    console.log(result.data.name);
    res.send("Hey");
});

app.listen(PORT, () => {
        console.log(`Server running at Port ${PORT}`);
})
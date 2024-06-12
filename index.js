const express = require ("express");
const app = express();

app.get ('/', (req,res) => {
    res.send ("CaC deploy2");
})

const PORT= proccess.env.PORT ||3000;

app.listen(PORT, () => console.log ('http://localhost:$(PORT)'));
// Packages.

const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000 || process.env.PORT;

// Static Files.

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>{
    console.log(`Sunucu localhost:${PORT}'da çalışıyor.`);
});
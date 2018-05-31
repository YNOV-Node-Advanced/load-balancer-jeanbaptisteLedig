const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", function(req, res) {
    res.send("Hello World from " + PORT);
});

app.listen(PORT, () => console.log("Server listening on http://localhost:" + PORT));
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const student = require("./routes/student");
const index = require("./routes/index")
const path = require("path");

// app.set("views", path.join(__dirname, "/View"));

// app.get("/", (req, res) =>{
    //     res.render("addStudent")
    // })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
 
app.use("/", index)
app.use("/add", student)
app.use(express.static(__dirname + "/View"))

app.listen(3000, () => {
    console.log("Running through local host...")
})
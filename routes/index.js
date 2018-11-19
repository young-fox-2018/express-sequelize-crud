const routes = require('express').Router();
const studentRoutes = require("./student");


routes.get("/", (req,res) =>{
    res.render("index.ejs",{input: "apa ya ini"})
})

routes.use("/student", studentRoutes)


module.exports = routes;
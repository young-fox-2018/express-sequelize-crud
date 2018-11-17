const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const home = require("./routers/index")
const student = require("./routers/student")
const teacher = require("./routers/teacher")
const subject = require("./routers/subject")


app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({}))
app.use("/", home)
app.use("/student", student)
app.use("/teacher", teacher)
app.use("/subject", subject)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})
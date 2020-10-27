require("dotenv").config();
const express = require("express");
const https = require("https");
const app = express();
const userRouter = require("./api/users/user.router");
app.use(express.json());


app.use("/api/users", userRouter);

/*app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port : ", process.env.APP_PORT);
});*/
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// apps.js
//import * as Sentry from "@sentry/browser";
//import { contextLinesIntegration } from "@sentry/integrations";
var express = require('express');
var apps = express();
/*client_secret = '4b335f33ba450c4433329efe34d0f8106a9f0dfbb84753aeb77906d60aadb4fc';*/
//Sentry.init({
//dsn:'https://7cb23d3b7a50d7b18d1aa10757778341@o4507159146594304.ingest.de.sentry.io/4507159149215824',
//integrations: [contextLinesIntegration()],
//});
const corsOptions = {
origin: 'https://alexanderkwesi.github.io/my-website-in-typescript/data', // Allow only this origin to access
methods: 'GET,POST', // Allow only GET and POST methods
allowedHeaders: 'Content-Type', // Allow only these headers
optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
apps.use(cors(corsOptions));
// Middleware to parse JSON bodies
apps.use(express.json());
// Sample data
var responseData = {
    message: 'Hello, world!',
    date: new Date()
};
var message = {};
// Route to handle requests
apps.get('/data', function (request, response) {
    // Send the data as JSON
    response.setHeader("Access-Control-Allow-Origin", "https://alexanderkwesi.github.io/my-website-in-typescript/test.html");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    //const data_s_ = request.read();
    response.send(responseData.message);
    message = response.json(responseData.message);
    //alert(data_s_);
});
// Start the server
var PORT = 5000;
apps.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });

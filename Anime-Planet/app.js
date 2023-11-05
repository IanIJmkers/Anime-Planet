// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "Anime-Planet";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// GET 1.route to anime-library page
app.get("/anime-library", (req, res, next) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/Anime-Planet/views/anime-library.hbs");
})

// GET 2.route to login page
app.get("/login", (req, res, next) => {
    res.sendFile(__dirname + "/Anime-Planet/views/login.hbs");
})

// GET 3.route to Signup page
app.get("/signup", (req, res, next) => {
    res.sendFile(__dirname + "/Anime-Planet/views/signup.hbs");
})

// GET 4.route to Users page
app.get("/users", (req, res, next) => {
    res.sendFile(__dirname + "/Anime-Planet/views/users.hbs");
})

// GET 5.route to Users Library page
app.get("/users-library", (req, res, next) => {
    res.sendFile(__dirname + "/Anime-Planet/views/users-library.hbs");
})

// GET 6.route to add anime to users library
app.get("/add-anime", (req, res, next) => {
    res.sendFile(__dirname + "/Anime-Planet/views/add-anime.hbs");
})

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

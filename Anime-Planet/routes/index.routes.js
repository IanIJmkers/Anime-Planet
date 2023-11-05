const express = require('express');
const router = express.Router();
const Anime = require("../models/Anime.model");
/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index")
});

///////////////////////// ALL ANIME ///////////////////////////////////
//routes to anime-library page
router.get("/anime/anime-library", (req, res,) => {
  Anime.find()
  .then((response) => {
    console.log(response);
  
  res.render("anime/anime-library.hbs", { animes: response });
  })
});


/////////////////////// CREATE ANIME ///////////////////////////////////
// Create an anime

// GET

router.get('/anime/create', (req, res) => {
  res.render("anime/add-anime.hbs");
  // ^^^syntax important 
});

// POST

/////////////////////// SINGLE ANIME ///////////////////////////////////
// GET Single Anime

// GET

/////////////////////// UPDATE ANIME ///////////////////////////////////
// Update an Anime

// GET

// PUT (modify)


// DELETE Anime


///////////////////////////////////////////


// LOGIN 

// SIGNUP

module.exports = router;

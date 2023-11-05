const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const animeSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: false,
      unique: true
    },
    description: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Anime = model("Anime", animeSchema);

module.exports = Anime;

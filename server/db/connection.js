const mongoose = require("mongoose");

// const url = `mongodb+srv://learnwithfair:5n5BHsbiz1lUJi6e@cluster0.zw6hky5.mongodb.net/chatApp`;
const url = "mongodb://localhost:27017/chatApp";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));

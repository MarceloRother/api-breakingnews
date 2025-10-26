const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://sys:sys@breakingnews-yt.xponuxc.mongodb.net/?appName=breakingnews-yt",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;

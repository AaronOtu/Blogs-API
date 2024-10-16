const express = require("express");
app = express();
const users = require("./routers/users");
const blogs = require("./routers/blogs");
const categories = require("./routers/categories");
const connectDB = require("./db/connection");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my blogs!");
});

app.use("/users", users)
app.use("/blogs", blogs);
app.use("/categories", categories);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start()
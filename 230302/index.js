const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

// app.get("/minkyu", (req, res) => {
//   return res.json({
//     name: "min Lee",
//     job: "studnt",
//     age:"27",
//     hobby:"coffee"
//   });
// });

app.get("/api/info", (req, res) => {
  return res.json({
    name: "min Lee",
    job: "student",
    age: "27",
    hobby: "coffee",
  });
});
app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs",{
    letters: 0
  }
  );
});

app.post("/submit", (req, res) => {

  var f=req.body['fName'].length;
  var l=req.body['lName'].length;

  var total=f+l;
  res.render(__dirname + "/views/index.ejs",{
    letters: total
   });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const exercises = require("./routes/exercises.routes");

const express = require("express");
const morgan = require("morgan");
const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(exercises);

const port = 3001;


app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});
const express = require("express");
const morgan = require("morgan");
const app = express();

const exercises = require("./routes/routes.exercises");

app.use(morgan("dev"));
app.use(express.json());
app.use(exercises);

const port = 3001;


app.listen(port, () => {
  console.log(`Estoy escuchando en el puerto ${port}`);
});
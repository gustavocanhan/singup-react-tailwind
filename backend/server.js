const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes");

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(helmet());

app.use("/api/users", userRoutes);

app.get("/test", (req, res) => {
  res.send("Rota funcionando");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

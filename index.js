const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_request, response) => {
  return response.send({ ok: true });
});

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});

import express from "express";
import api from "./services/api.js";
const { PORT = 8080, CLIENT_FOLDER = "../client" } = process.env;
const app = express();

app.use(express.static(CLIENT_FOLDER));
app.use("/api", api);

console.log("Test");

app.get('/', (req, res) => {
  res.send('Hello from the root path!'); // Or res.sendFile(...) for an HTML file
});

app.listen(PORT, () => {
  console.log("Hello!");
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const studRoutes = require("./students");

const server = express();
const port = 1996;

server.use(express.json());
server.use("/students", studRoutes);

server.listen(port, () => {
  console.log(`Server running at: ${port}/`);
});

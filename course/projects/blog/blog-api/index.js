const http = require("http");
const app = require("./app");
const { port } = require("./config/keys");

// cr8 server instance
const server = http.createServer(app);

// listen to server
server.listen(port, () => console.log(`Server is running on port: ${port}`));

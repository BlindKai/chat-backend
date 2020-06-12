const http = require("http");
const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((ws) => {
      ws.send(data);
    });
  });

  ws.on("close", (code, reason) => {
    console.log(`WebSocked closed the connection: [${code}] ${reason}`);
  });
});

server.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});

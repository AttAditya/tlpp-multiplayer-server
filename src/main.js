const { Server } = require("ws");

const { RoomManager } = require("./room");
const { Player } = require("./player");

const port = process.env.PORT || 8000;
const server = new Server({ port });
const roomsManager = new RoomManager();
const players = {};

server.on("connection", (socket) => {
  const player = new Player(socket, roomsManager);
  players[player.id] = player;
});


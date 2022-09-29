import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: true,
});

io.on("connection", (socket) => {
	socket.on("change", (data) => {
		console.log(data);

		socket.broadcast.emit("change", data);
	});
});

httpServer.listen(5000, () => console.log("Server started on port 5000"));

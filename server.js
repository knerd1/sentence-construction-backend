const jsonServer = require("json-server");
const express = require("express");
const cors = require("cors");

const server = express();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

// Set port for Render
const PORT = process.env.PORT || 3001;

// Enable CORS for all origins or specify your frontend URL
server.use(
	cors({
		origin: process.env.FRONTEND_URL || "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

// Use default middlewares
server.use(middlewares);

// Use JSON Server router
server.use(router);

// Health check endpoint
server.get("/health", (req, res) => {
	res.json({ status: "UP", message: "Sentence Construction API is running" });
});

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});

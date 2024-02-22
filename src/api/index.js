const http = require("http");

const comments = require("../data/comments.json");
const firstFake = require("../data/first_fake.json");
const secondFake = require("../data/second_fake.json");

// const cache = JSON.parse(JSON.stringify(comments))

const server = http.createServer((req, res) => {}).listen(8081, () => {});

server.on("request", (req, resp) => {
  if (req.url === "/api/comments" && req.method === "GET") {
    resp.setHeader("Content-Type", "text/json");
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    resp.setHeader("Access-Control-Max-Age", 2592000); // 30 days
    resp.end(JSON.stringify(comments), "utf-8");
  }
});

server.on("request", (req, resp) => {
  if (req.url === "/api/first-fake" && req.method === "GET") {
    resp.setHeader("Content-Type", "text/json");
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    resp.setHeader("Access-Control-Max-Age", 2592000);
    resp.end(JSON.stringify(firstFake), "utf-8");
  }
});

server.on("request", (req, resp) => {
  if (req.url === "/api/second-fake" && req.method === "GET") {
    resp.setHeader("Content-Type", "text/json");
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    resp.setHeader("Access-Control-Max-Age", 2592000);
    resp.end(JSON.stringify(secondFake), "utf-8");
  }
});

const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001;

const server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];

    if (param1 === "rickandmorty" && param2 == "character") {
      const parsedId = parseInt(id);
      const char = characters.find((ch) => {
        return ch.id === parsedId;
      });
      if (char)
      return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(char));
    }

    res.end("test");
  })
  .listen(PORT, () => {
    console.log("in port http://localhost:3001");
  });

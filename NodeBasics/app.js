const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    return fs.readFile("./messages.txt", "utf8", (err, data) => {
      if (err) {
        console.log("hit");
        console.error(err);
      }
      res.write("<html>");
      res.write("<head><title>Node Js</title></head>");
      res.write("<body>");
      res.write(`<span>${data}<span>`);
      res.write(
        "<form method='POST' action='/msg'><input type='text' name='msg' /><button type='Submit'>Send</button></form>"
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/msg" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const msg = parsedbody.split("=")[1];
      fs.writeFile("./messages.txt", msg, () => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  }
  res.write("<html>");
  res.write("<head><title>Node Js</title></head>");
  res.write("<body><h1>Welcome to Node Js </h1></body>");
  res.write("</html>");
  return res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

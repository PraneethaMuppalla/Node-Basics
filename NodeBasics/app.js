const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Home</title></head>");
  res.write("<body>");
  if (url === "/home") {
    res.write("<h1>Welcome to home</h1>");
  } else if (url === "/about") {
    res.write("<h1>Welcome to About Us page</h1>");
  } else if (url === "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
  }
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);

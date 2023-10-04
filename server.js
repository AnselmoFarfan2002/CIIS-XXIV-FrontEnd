const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = app.getRequestHandler();

const port = process.env.port || 80;

app.prepare().then(() => {
  createServer((req, res) => {
    const parseUrl = parse(req.url, true);
    const { pathname, query } = parseUrl;

    if (pathname === "/a") {
      app.render(req, res, "/a", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parseUrl);
    }
  }).listen(port, err => {
    if(err) throw err
    console.log("listos en el puerto", port)
  });
});
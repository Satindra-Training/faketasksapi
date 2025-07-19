const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
// Remove default static middleware that looks for `/public`
// const middlewares = jsonServer.defaults();

const middlewares = jsonServer.defaults({
  static: './nonexistent' // or false if using 0.17.0+
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});

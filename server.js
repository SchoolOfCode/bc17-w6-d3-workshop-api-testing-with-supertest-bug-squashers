import app from "./app.js";
const port = 5432;

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${server.address().port}`);
});

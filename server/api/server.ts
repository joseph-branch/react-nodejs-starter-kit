import app from "./app";

const PORT: number = 5000;

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});

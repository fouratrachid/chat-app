import app from "./app.js"
import morgan from "morgan";
app.use(morgan("dev"));
const port = 3002;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

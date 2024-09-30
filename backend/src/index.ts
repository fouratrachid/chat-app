import app from "./app.js"
import morgan from "morgan";
import appRouter from "./routes/index.js";
app.use(morgan("dev"));
const port = 3002;
const {Client} = require('pg');
app.use("api/v1",appRouter) ; 
const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port :'5432',
  password: '123456',
  database : 'postgres'
}) ; 

client.connect();

client.query('Select NOW(); ', (err, res) => {
  if (!err) 
  {
    console.log(res) ;
  }
  else
  {
    console.log(err.message) ;
  }
  client.end()
}) ; 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

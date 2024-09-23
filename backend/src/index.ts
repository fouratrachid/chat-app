import express from 'express';

const app = express();
const port = 3000;


// GET request to the root of the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// GET request to /hello
app.get('/hello', (req, res) => {
  res.send('Hello from /hello!');
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`) ;
  console.log('Press Ctrl+C to quit.'); 
} ) ; 

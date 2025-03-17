require('dotenv').config();
const app = require('./app');
const http = require('http');
const connectDB = require('./db');


const PORT = process.env.PORT || 3000;

connectDB();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

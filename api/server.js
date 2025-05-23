import express from 'express';
import cors from 'cors';
import winston from 'winston';

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || 'http://localhost:3000';

app.get('/', (req, res) => {
    winston.info('Root endpoint hit');
    res.send('Hello World!: ' + API_URL);
});




app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
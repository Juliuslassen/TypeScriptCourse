import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server, Jack er en fucking luder, det er sander også');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
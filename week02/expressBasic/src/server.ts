import express, { Express, Request, Response , Application, NextFunction } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log4js from 'log4js';
import axios, { AxiosResponse } from 'axios'
import * as path from 'node:path'
import { notFound, errorHandler } from './error.js';

//For env File 
dotenv.config();

const app: Application = express();
const dbport = process.env.db_PORT || 3000;
const port = process.env.PORT || 7007;

//middelware 
//app.use(express.static('public'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// url for database api calls
const dbBaseURL: string = `http://localhost:${dbport}`;

// Middlewar
app.use(bodyParser.json());
app.use(morgan('dev'));

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"))
});

type Person = {
    id: number,
    name: string,
    age: number
}

//get specific person based on Id
app.get('/persons/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id: string = req.params.id;
  try{
  const response = await axios.get(`${dbBaseURL}/persons/${id}`)  
  if(response.data){
    const person: Person = response.data;
    res.status(200).send(`Personen med id: ${person.id}, hedder ${person.name} og er ${person.age}`);
  } else {
    res.status(404).send('not found')
  }
  } catch(err: unknown){
    res.status(400).send('Something went comepletely wrong');
    next(err)
  }
})


//get all
app.get('/persons', async(req: Request, res: Response, next: NextFunction) => {
  
  axios.get(`${dbBaseURL}/persons`)
  .then((respons) => {
    res.status(200).json(respons.data);
  })
  .catch((error: unknown) => {
    next(error);
  })

  {/*
  try{
    const response: AxiosResponse = await axios.get(`${dbBaseURL}/persons`)
    const personsArray = response.data;
    
    if(personsArray){
      res.status(200).json(personsArray);
    } else {
      res.status(404).json({ msg: "Could not find persons"})
    }
  } catch(err: unknown){
    next(err);
  }
*/}
})

// create a new person
app.post('/persons', async(req: Request, res: Response, next: NextFunction) => {

  const person: Person = req.body;
  try{
    const response: AxiosResponse = await axios.post(`${dbBaseURL}/persons`, person);
    if(response){
      res.status(201).json(response.data);
    } else {
      res.status(403).send("looks like you dont have permission to post")
    }
  } catch(err: unknown){
    next(err);
    res.status(404).send('Bad post request')
  }
})


//update a user
app.put('/persons/:id', async(req: Request, res: Response, next: NextFunction) =>{
  let person: Person = req.body;
  const id: string = req.params.id;
  try{
      const newPerson = await axios.put(`${dbBaseURL}/persons/${id}`, person);
      if(newPerson){
        res.status(204).json(newPerson.data);
      }
  }catch (err: unknown){
    next(err);
  }
})

type User = {
  name: string,
  lastname: string,
  email: string,
  password: string,
  confirmPass: string
}

app.post('/users', async(req: Request, res: Response, next: NextFunction) => {
  try{
    let user = req.query;
     res.status(200).json({
      msg: "works",
      user
     })
  } catch(err: unknown){
    next(err);
  }
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
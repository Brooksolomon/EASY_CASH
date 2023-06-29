import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
 ; 

import sequelize from './db/sequelize_db';
import UserRouter from './api/routes/user_routes';
import User from './db/models/user_model';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 

const port = process.env.PORT || 3000;
app.use('/user', cors(), UserRouter);

 

 

sequelize.authenticate().then(async () => {

  console.log('Database connection has been established successfully.');
 
 
  await User.sync({ alter: true });

  app.listen(3000, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });


}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});



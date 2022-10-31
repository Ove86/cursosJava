import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( ()=> console.log ('Base de datos conectada'))
    .catch (error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine','pug');

// Obtener año actual
app.use((req,res,next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    return next();
});

// Agregar body parser para leer datos de formulario
app.use(express.urlencoded({extended:true}));

// Definir carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/',router);

app.listen (port,() =>{
    console.log (`El servidor funciona correctamente en el puerto ${port}`)
})
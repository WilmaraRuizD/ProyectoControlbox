import  express  from "express";
import morgan from "morgan";
import cros from 'cors';
import bodyParser from "body-parser";
import rolRoutes from './router/rol.routes.js';
import usuariosRouter from './router/usuarios.routes.js';
import librosRouter from './router/libros.routes.js';
import categoriaRouter from './router/categoria.routes.js';
import comentariosRouter from './router/comentarios.routes.js';


import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from "swagger-jsdoc";


const app= express();
//configuracion cros
app.use(cros({
  credentials: true,
  origin:'http://localhost:5173',
}));

const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'API REST controlbox.net',
          description: 'Esta es la documentación de la API en Node-MYSQL, creada como requisito de la prueba tecnica de controlbox.net',
          contact: {
              name: 'Wilmara Ruiz Diaz ',
              email: 'wilmara_andreina93@hotmail.com'
          },
          servers: ['http://localhost:3000'],
          version: '1.0'
      }
  },
  apis: [`./dist/docs/*.js`]

}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//middlewere
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(morgan('dev'));
app.use(express.json());
//app.use(cookieParser());

//rutas 
app.post('/upload', (req, res) => {
  res.send("upload");
});

app.use('/api/rol',rolRoutes);
app.use('/api/usuario',usuariosRouter);
app.use('/api/categoria',categoriaRouter);
app.use('/api/libros',librosRouter);
app.use('/api/comentarios',comentariosRouter);
export default app;
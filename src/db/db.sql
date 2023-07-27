---Creación base de datos 
CREATE DATABASE IF NOT EXISTS PROYECTO_CONTROLBOX ;

---------UTILIZANDO LA BASA DE DATOS
USE PROYECTO_CONTROLBOX

-------Se borran las tablas si existen
DROP TABLE rol;
DROP TABLE usuario;
DROP TABLE categoria;
DROP TABLE libros;
DROP TABLE resena;

---Crea la tabla usuario 

CREATE TABLE rol(
  id INT(10) NOT NULL AUTO_INCREMENT,
  nombre_rol VARCHAR (10) NOT NULL,
  PRIMARY KEY (id)
);

DESCRIBE rol;

 INSERT INTO rol(nombre_rol)VALUES
                ('admin'),
                ('user');

 ----Muestra el valor de la tabla                      
 SELECT * FROM rol;

  -------Se crea tabla 
CREATE TABLE usuario(
   id INT (10) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(200) NOT NULL,
  apellido VARCHAR(10) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  clave VARCHAR(10) NOT NULL,
  rol_id INT (10) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_rol_id FOREIGN KEY(rol_id)REFERENCES rol(id)
);

DESCRIBE usuario;

 INSERT INTO usuario(nombre,apellido,correo,clave,rol_id)VALUES
 ('Wilmara','Ruiz','wilmara_andreina93@hotmail.com','1234',1),
          ('Maria','Riaz','mariaDiazM@hotmail.com','4321',2);

 ----Muestra el valor de la tabla                      
 SELECT * FROM usuario;

-------Se crea tabla categoria
CREATE TABLE categoria(
  id INT (10) NOT NULL AUTO_INCREMENT,
  nombre_categoria VARCHAR (50) NOT NULL,
  PRIMARY KEY (id)
);

------Se incerta en la tabla categoria 
 INSERT INTO categoria(nombre_categoria)VALUES
                      ('Científicos'),
                      ('Literatura y lingüísticos'),
                      ('De viaje'),
                      ('novelas'),
                      ('literatura infantil'),
                      ('Profesional y Crecimiento personal'),
                      ('Poeticos'),
                      ('Literatura juvenil'),
                      ('Ficción'),
                      ('Comedia');

 ----Muestra el valor de la tabla                      
 SELECT * FROM categoria;

------Se crea tabla 
 CREATE TABLE libros(
  id INT (10) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(50)NOT NULL,
  resena VARCHAR(250),
  foto VARCHAR (250)NOT NULL,
  categoria_id INT (10) NOT NULL,
  PRIMARY KEY categoria (id),
 CONSTRAINT fk_categoria_id FOREIGN KEY(categoria_id)REFERENCES categoria(id)

);


DESCRIBE categoria;
DESCRIBE libros;

---cargar base de libros 
 INSERT INTO libros(titulo,autor,resena,foto,categoria_id)VALUES
 ("El origen de las especies","Charles Darwin","La teoría de la evolución, que se explica en el volumen, cambió el mundo para siempre","https://m.media-amazon.com/images/I/61ka1h-XjNL._SL500_.jpg",1),
 ("Cinco mil años de palabras","Carlos Prieto","Cómo salimos del silencio? Este y otros interrogantes fluyen como una constante en esta minuciosa investigación.","https://m.media-amazon.com/images/I/61Re3Q3BB-L.jpg",2);

  ----Muestra el valor de la tabla                      
 SELECT * FROM libros;

  ---Crea la tabla usuario 

CREATE TABLE comentarios(
   id INT(10) NOT NULL AUTO_INCREMENT,
   descripcion VARCHAR (50) NOT NULL,
   puntuacion INT (10) NOT NULL,
   libros_id INT (10) NOT NULL,
   usuario_id INT (10) NOT NULL,
 PRIMARY KEY (id),
 CONSTRAINT fk_libros_id FOREIGN KEY(libros_id)REFERENCES libros(id),
 CONSTRAINT fk_usuario_id FOREIGN KEY(usuario_id)REFERENCES usuario(id)
)
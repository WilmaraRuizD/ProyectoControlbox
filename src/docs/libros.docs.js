/**
 * @swagger
 * components:
 *  schemas:
 *      rol:
 *          type: object
 *          properties:
 *              nombre_rol:
 *                  type: string
 *                  description: nombre del rol
 *          required:
 *                  - nombre_rol:
 *      usuario:
 *          type: object
 *          properties:
 *              nombre: 
 *                    type: string
 *                    description: nombre del usuario
 *              apellido:
 *                  type: string
 *                  description: apellido del usuario
 *              correo:
 *                  type: string
 *                  description: correo del usuario 
 *              clave: 
 *                  type: string 
 *                  description: contraseña de usuario
 *              rol_id: 
 *                  type: number
 *                  description: rol del usuario 
 *          required: 
 *                  - nombre:
 *                  - apellido:
 *                  - correo:
 *                  - clave:
 *                  - rol_id:
 *      libros:
 *          type: object
 *          properties:
 *              titulo: 
 *                    type: string
 *                    description: nombre del libro
 *              autor:
 *                  type: string
 *                  description: resena del libro
 *              foto:
 *                  type: string
 *                  description: Foto del libro
 *              categoria_id:
 *                  type: number
 *                  categoria del libro 
 *          required: 
 *                  - titulo:
 *                  - autor:
 *                  - resena:
 *                  - foto:
 *                  - categoria_id:
 *      categoria:
 *          type: object
 *          properties:
 *              nombre_categoria: 
 *                    type: string
 *                    description: cattegoria del libro 
 *          required: 
 *                  - nombre_categoria:
 *      comentarios:
 *          type: object
 *          properties:
 *              descripcion: 
 *                    type: string
 *                    description: nombre del libro
 *              puntuacion:
 *                  type: string
 *                  description: resena del libro
 *              foto:
 *                  type: string
 *                  description: Foto del libro
 *              categoria_id:
 *                  type: number
 *                  categoria del libro 
 *          required: 
 *                  - titulo:
 *                  - autor:
 *                  - resena:
 *                  - foto:
 *                  - categoria_id:
 

 


import { Router } from "express";
import {getComentarios,getComentariosId,createComentarios,deleteComentarios,actualizarComentarios}from '../controllers/comentarios.controllers.js'

 const router = Router();

 
 router.get('/',getComentarios)

 router.get('/:id',getComentariosId)

 router.post('/',createComentarios)
 
router.delete('/:id',deleteComentarios)

router.put('/:id',actualizarComentarios)
 export default router
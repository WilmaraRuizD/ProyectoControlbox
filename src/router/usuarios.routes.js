import { Router } from "express";
import {createUsuario,getUsuarioId,getUsuario,deleteUsuario,actualizarUsuario}from '../controllers/usuario.controllers.js'

 const router = Router();

 
 router.get('/',getUsuario)

 router.get('/:id',getUsuarioId)

 router.post('/',createUsuario)
 
router.delete('/:id',deleteUsuario)

router.put('/:id',actualizarUsuario)
 export default router
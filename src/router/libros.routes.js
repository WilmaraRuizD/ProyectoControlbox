import { Router } from "express";
import {createLibros,getLibrosId,getLibros,deleteLibros,actualizarLibros}from '../controllers/libro.controllers.js'

 const router = Router();

 
 router.get('/',getLibros)

 router.get('/:id',getLibrosId)

 router.post('/',createLibros)
 
router.delete('/:id',deleteLibros)

router.put('/:id',actualizarLibros)
 export default router
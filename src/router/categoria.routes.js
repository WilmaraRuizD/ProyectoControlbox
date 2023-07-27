import { Router } from "express";
import {createCategoria,getCategoria,getCategoriaId,deleteCategoria,actualizarCategoria}from '../controllers/categoria.controllers.js'

 const router = Router();

 
 router.get('/',getCategoria)

 router.get('/:id',getCategoriaId)

 router.post('/',createCategoria)
 
router.delete('/:id',deleteCategoria)

router.put('/:id',actualizarCategoria)
 export default router
import { Router } from "express";
import { getRol } from "../controllers/rol.controllers.js";


 const router = Router();

 
 router.get('/',getRol)

 
 export default router
import { pool } from "../db/config.js";


 export const getRol= async(req, res) => {
  try{
    const [rows]=await pool.query(`SELECT * FROM rol `)
    res.json(rows);
  }catch(error){
    return res.status(500).json({ message: "Error de servidor" });
  }

}
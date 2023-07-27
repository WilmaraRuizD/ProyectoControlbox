import {
  pool
} from "./../db/config.js";

export const getCategoria = async(req, res) => {
  try{
    const [rows]=await pool.query(`SELECT * FROM categoria `)
    res.json(rows);
  }catch(error){
    return res.status(500).json({ message: "Error de servidor" });
  }
}  

export const getCategoriaId=async(req,res)=>{ 
  try{
    const [rows] = await pool.query("SELECT * FROM categoria WHERE id = ?", [req.params.id,
    ]);
    if(rows.length<=0){
      return res.status(404).json({ message: "Categoria no existe" });
    }
    res.json(rows[0]);
  }catch (error) {
      return res.status(500).json({
        message: "Error de servidor"
      });
    }
 
  
}
export const createCategoria= async (req, res) => {
  try {
    const {
      nombre_categoria
    } = req.body;
    
    const [rows] = await pool.query('INSERT INTO categoria(nombre_categoria) VALUES (?)',
      [ nombre_categoria]
    );
    res.status(201).json({
      id: rows.insertId,
      nombre_categoria
    })

  } catch (error) {
    return res.status(500).json({
      message: "Error de servidor"
    });
 
  }
};

export const deleteCategoria =async (req, res) => {

  try{
    console.log(req.params.id)
    const[rows]=await pool.query("DELETE FROM categoria WHERE id = ?", [req.params.id])
    if (rows.affectedRows <= 0) {
     return res.status(404).json({ message: "Categoria con id no existe" });
   }
   res.sendStatus(204);
  }catch(error){
    return req.message(500).json({
      message: "Error de servidor "
    });
  }
 };

 export const actualizarCategoria=async(req,res)=>{
  try{
    const {id}=req.params;
    const{nombre_categoria}=req.body
      const [result]=await pool.query('UPDATE categoria SET nombre_categoria=? WHERE id=?',
      [
        nombre_categoria,
        id
    
      ])
    
      if(result.affectedRows===0){
       return res.status(404).json({message:"Categoria no existe "})
      }
      const [rows] = await pool.query("SELECT * FROM categoria WHERE id = ?", [
        id,
      ]);
    
      res.json(rows[0]);
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "error inesperado" });
  }

 }
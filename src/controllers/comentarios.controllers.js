import {
  pool
} from "./../db/config.js";

export const getComentarios= async(req, res) => {
  try{
    const [rows]=await pool.query(`SELECT * FROM comentarios `)
    res.json(rows);
  }catch(error){
    return res.status(500).json({ message: "Error de servidor" });
  }
}  

export const getComentariosId=async(req,res)=>{ 
  try{
    const [rows] = await pool.query("SELECT * FROM Comentarios WHERE id = ?", [req.params.id,
    ]);
    if(rows.length<=0){
      return res.status(404).json({ message: "Comentarios no existe" });
    }
    res.json(rows[0]);
  }catch (error) {
      return res.status(500).json({
        message: "Error de servidor"
      });
    }
 
  
}
export const createComentarios= async (req, res) => {
  try {
    const {
      descripcion,
      puntuacion,
      libros_id,
      usuario_id
    } = req.body;
    
    const [rows] = await pool.query('INSERT INTO comentarios(descripcion,puntuacion,libros_id,usuario_id) VALUES (?,?,?,?)',
      [ descripcion,
        puntuacion,
        libros_id,
        usuario_id]
    );
    res.status(201).json({
      id: rows.insertId,
      descripcion,
      puntuacion,
      libros_id,
      usuario_id
    })

  } catch (error) {
    return res.status(500).json({
      message: "Error de servidor"
    });
 
  }
};

export const deleteComentarios =async (req, res) => {

  try{
    console.log(req.params.id)
    const[rows]=await pool.query("DELETE FROM comentarios WHERE id = ?", [req.params.id])
    if (rows.affectedRows <= 0) {
     return res.status(404).json({ message: "Comentarios con id no existe" });
   }
   res.sendStatus(204);
  }catch(error){
    return req.message(500).json({
      message: "Error de servidor "
    });
  }
 };

 export const actualizarComentarios=async(req,res)=>{
  try{
    const {id}=req.params;
    const{descripcion,
      puntuacion,
      libros_id,
      usuario_id}=req.body
      const [result]=await pool.query('UPDATE Comentarios SET descripcion=?,puntuacion=?, libros_id=?,usuario_id=? WHERE id=?',
      [
        descripcion,
        puntuacion,
        libros_id,
        usuario_id,
        id
    
      ])
    
      if(result.affectedRows===0){
       return res.status(404).json({message:"Comentarios no existe "})
      }
      const [rows] = await pool.query("SELECT * FROM comentarios WHERE id = ?", [
        id,
      ]);
    
      res.json(rows[0]);
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "error inesperado" });
  }

 }
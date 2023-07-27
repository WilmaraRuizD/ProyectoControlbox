import {
  pool
} from "./../db/config.js";

export const getLibros = async(req, res) => {
  try{
    const [rows]=await pool.query(`SELECT * FROM libros `)
    res.json(rows);
  }catch(error){
    return res.status(500).json({ message: "Error de servidor" });
  }
}  

export const getLibrosId=async(req,res)=>{ 
  try{
    const [rows] = await pool.query("SELECT * FROM libros WHERE id = ?", [req.params.id,
    ]);
    if(rows.length<=0){
      return res.status(404).json({ message: "Libros no existe" });
    }
    res.json(rows[0]);
  }catch (error) {
      return res.status(500).json({
        message: "Error de servidor"
      });
    }
 
  
}
export const createLibros= async (req, res) => {
  try {
    const {
      titulo,
      autor,
      resena,
      foto,
      categoria_id
    } = req.body;
    
    const [rows] = await pool.query('INSERT INTO libros(titulo,autor,resena , foto, categoria_id) VALUES (?,?,?,?,?)',
      [titulo, autor, resena, foto, categoria_id]
    );
    res.status(201).json({
      id: rows.insertId,
      titulo,
      autor,
      resena,
      foto,
      categoria_id
    })

  } catch (error) {
    return res.status(500).json({
      message: "Error de servidor"
    });
 
  }
};

export const deleteLibros =async (req, res) => {

  try{
    console.log(req.params.id)
    const[rows]=await pool.query("DELETE FROM libros WHERE id = ?", [req.params.id])
    if (rows.affectedRows <= 0) {
     return res.status(404).json({ message: "libro con id no existe" });
   }
   res.sendStatus(204);
  }catch(error){
    return req.message(500).json({
      message: "Error de servidor "
    });
  }
 };

 export const actualizarLibros=async(req,res)=>{
  try{
    const {id}=req.params;
    const{titulo,
      autor,
      resena,
      foto,
      categoria_id}=req.body
      const [result]=await pool.query('UPDATE libros SET titulo=?, autor =?,resena=?,foto=?,categoria_id=? WHERE id=?',
      [titulo,
        autor,
        resena,
        foto,
        categoria_id,
        id
    
      ])
    
      if(result.affectedRows===0){
       return res.status(404).json({message:"libro no existe "})
      }
      const [rows] = await pool.query("SELECT * FROM libros WHERE id = ?", [
        id,
      ]);
    
      res.json(rows[0]);
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "error inesperado" });
  }

 }
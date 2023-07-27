import {
  pool
} from "./../db/config.js";

export const getUsuario = async(req, res) => {
  try{
    const [rows]=await pool.query(`SELECT * FROM usuario `)
    res.json(rows);
  }catch(error){
    console.log(error)
    return res.status(500).json({ message: "Error de servidor" });
  }
}  

export const getUsuarioId=async(req,res)=>{
  try{
    const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [req.params.id,
    ]);
    if(rows.length<=0){
      return res.status(404).json({ message: "Usuario no existe" });
    }
    res.json(rows[0]);
  }catch (error) {
      return res.status(500).json({
        message: "Error de servidor"
      });
    }
 
  
}
export const createUsuario = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      correo,
      clave,
      rol_id
    } = req.body;
    
    const [rows] = await pool.query('INSERT INTO usuario(nombre,apellido,correo , clave, rol_id) VALUES (?,?,?,?,?)',
      [nombre, apellido, correo, clave, rol_id]
    );
    res.status(201).json({
      id: rows.insertId,
      nombre,
      apellido,
      correo,
      clave,
      rol_id
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Error de servidor"
    });
 
  }
};

export const deleteUsuario =async (req, res) => {

  try{
    console.log(req.params.id)
    const[rows]=await pool.query("DELETE FROM usuario WHERE id = ?", [req.params.id])
    if (rows.affectedRows <= 0) {
     return res.status(404).json({ message: "usuario con id no existe" });
   }
   res.sendStatus(204);
  }catch(error){
    return req.message(500).json({
      message: "Error de servidor "
    });
  }
 };

 export const actualizarUsuario=async(req,res)=>{
  try{
    const {id}=req.params;
    const{nombre,
      apellido,
      correo,
      clave,
      rol_id}=req.body
      const [result]=await pool.query('UPDATE usuario SET nombre =?, apellido =?,correo=?,clave=?,rol_id=? WHERE id=?',
      [nombre,
        apellido,
        correo,
        clave,
        rol_id,
        id
    
      ])
    
      if(result.affectedRows===0){
       return res.status(404).json({message:"usuario no existe "})
      }
      const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [
        id,
      ]);
    
      res.json(rows[0]);
  }catch(error){
    return res.status(500).json({ message: "error inesperado" });
  }

 }
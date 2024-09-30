import { getConnection } from "../database/connection.js";
import sql from 'mssql'

//Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try{
        const pool = await getConnection()
        const result = await pool.request().query('SELECT * FROM Usuario')
        res.json(result.recordset)
    }
    catch(error){
        console.error("Error al obtener usuarios:", error);
        res.status(500).json({ message: "Error al obtener usuarios" });
    }

};

//Obtener 1 usuario atraves del ID
export const getUser = async (req, res) => {
    try{
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('IdUsuario', sql.Int, req.params.id)
        .query(' SELECT * FROM Usuario WHERE IdUsuario = @IdUsuario')
        console.log(result);
       if(result.rowsAffected[0] === 0){
        return res.status(404).json({message: "Usuario no encontrado"})
       }
    
       return res.json(result.recordset[0])
    }
    catch(error){
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ message: "Error al obtener el usuario" });
    }

};

//Crear un usuario
export const createUser = async (req, res) => {

    try{
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('NombreUsuario', sql.VarChar, req.body.NombreUsuario)
        .input('Nombre', sql.VarChar, req.body.Nombre)
        .input('Apellido', sql.VarChar, req.body.Apellido)
        .input('Email', sql.VarChar, req.body.Email)
        .input('Contrasenia', sql.VarChar, req.body.Contrasenia)
        .query('INSERT INTO Usuario (NombreUsuario, Nombre, Apellido, Email, Contrasenia) VALUES (@NombreUsuario, @Nombre, @Apellido, @Email, @Contrasenia); SELECT SCOPE_IDENTITY() AS IdUsuario')
    
        res.json({
            id: result.recordset[0].IdUsuario,
            NombreUsuario: req.body.NombreUsuario,
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Email: req.body.Email,
            Contrasenia: req.body.Contrasenia,
        });
    }
    catch(error){
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ message: "Error al crear el usuario" });
    }

};

//Actualizar usuario
export const updateUser = async (req, res) => {

    try{
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('IdUsuario', sql.Int, req.params.id)
        .input('NombreUsuario', sql.VarChar, req.body.NombreUsuario)
        .input('Nombre', sql.VarChar, req.body.Nombre)
        .input('Apellido', sql.VarChar, req.body.Apellido)
        .input('Email', sql.VarChar, req.body.Email)
        .input('Contrasenia', sql.VarChar, req.body.Contrasenia)
        .query('UPDATE Usuario SET NombreUsuario = @NombreUsuario, Nombre = @Nombre, Apellido = @Apellido, Email = @Email, Contrasenia = @Contrasenia WHERE IdUsuario = @IdUsuario')
        
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Usuario no encontrado"});
        }
        res.json({
            IdUsuario: req.params.id,
            NombreUsuario: req.body.NombreUsuario,
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Email: req.body.Email,
            Contrasenia: req.body.Contrasenia,
        })
    }
    catch(error){
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }

};

//Eliminar un usuario
export const deleteUser = async (req, res) => {
    try{

        const pool = await getConnection()
        const result = await pool.request()
        .input('IdUsuario', sql.Int, req.params.id)
        .query('DELETE FROM Usuario WHERE IdUsuario = @IdUsuario')
        console.log(result)
    
        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Usuario no encontrado"});
        }
    
        return res.json({message: "Usuario Eliminado"});
    }
    catch(error){
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ message: "Error al eliminar el usuario" });
    }

};
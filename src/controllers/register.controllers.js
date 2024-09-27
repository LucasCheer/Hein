import { getConnection } from "../database/connection.js";
import sql from 'mssql'

//Obtener todos los registros
export const getRegisters = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query('SELECT * FROM Registro')
        res.json(result.recordset)
    }
    catch (error) {
        console.error("Error al obtener registros:", error);
        res.status(500).json({ message: "Error al obtener registros" });
    }

};

//Obtener 1 registro atraves del ID
export const getRegister = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IdRegistro', sql.Int, req.params.id)
            .query(' SELECT * FROM Registro WHERE IdRegistro = @IdRegistro')
        console.log(result);
        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Registro no encontrado" })
        }

        return res.json(result.recordset[0])
    }
    catch (error) {
        console.error("Error al obtener el registro:", error);
        res.status(500).json({ message: "Error al obtener el registro" });
    }

};

//Crear un registro
export const createRegister = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IdRegistro', sql.Int, req.params.IdRegistro)
            .input('FechaIngreso', sql.DateTime, req.body.FechaIngreso)
            .input('Descripcion', sql.VarChar, req.body.Descripcion)
            .input('IdUsuario', sql.Int, req.body.IdUsuario)
            .input('IdEmocion', sql.Int, req.body.IdEmocion)
            .query('INSERT INTO Registro (FechaIngreso, Descripcion, IdUsuario, IdEmocion) VALUES (@FechaIngreso, @Descripcion, @Idusuario, @IdEmocion); SELECT SCOPE_IDENTITY() AS IdRegistro')

        res.json({
            id: result.recordset[0].IdRegistro,
            FechaIngreso: req.body.FechaIngreso,
            Descripcion: req.body.Descripcion,
            IdUsuario: req.params.IdUsuario,
            IdEmocion: req.params.IdEmocion,
        });
    }
    catch (error) {
        console.error("Error al crear el registro:", error);
        res.status(500).json({ message: "Error al crear el registro" });
    }

};

//Actualizar registro
export const updateRegister = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('IdRegistro', sql.Int, req.params.id)
            .input('FechaIngreso', sql.DateTime, req.body.FechaIngreso)
            .input('Descripcion', sql.VarChar, req.body.Descripcion)
            .input('IdUsuario', sql.Int, req.body.IdUsuario)
            .input('IdEmocion', sql.Int, req.body.IdEmocion)
            .query('UPDATE Registro SET FechaIngreso = @FechaIngreso, Descripcion = @Descripcion, IdUsuario = @IdUsuario, IdEmocion = @IdEmocion WHERE IdRegistro = @IdRegistro')

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Registro no encontrado" });
        }
        res.json({
            IdRegistro: req.params.id,
            FechaIngreso: req.body.FechaIngreso,
            Descripcion: req.body.Descripcion,
            IdUsuario: req.body.IdUsuario,
            IdEmocion: req.body.IdEmocion,
        })
    }
    catch (error) {
        console.error("Error al actualizar el registro:", error);
        res.status(500).json({ message: "Error al actualizar el registro" });
    }

};

//Eliminar un usuario
export const deleteRegister = async (req, res) => {
    try {

        const pool = await getConnection()
        const result = await pool.request()
            .input('IdRegistro', sql.Int, req.params.id)
            .query('DELETE FROM Registro WHERE IdRegistro = @IdRegistro')
        console.log(result)

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Registro no encontrado" });
        }

        return res.json({ message: "Registro Eliminado" });
    }
    catch (error) {
        console.error("Error al eliminar el registro:", error);
        res.status(500).json({ message: "Error al eliminar el registro" });
    }

};
import { getConnection } from "../database/connection.js";
import sql from 'mssql';
import bcrypt from 'bcrypt';
import { SALT_ROUND } from '../config.js'; 

export const registerUser = async (req, res) => {
    const { NombreUsuario, Nombre, Contrasenia, Email } = req.body;
    
    try {
        const pool = await getConnection();

        // Validar el nombre de usuario
        if (!NombreUsuario || NombreUsuario.length < 3) {
            return res.status(400).json({ message: "El nombre de usuario debe tener al menos 3 caracteres." });
        }

        if (typeof NombreUsuario != "string") {
            return res.status(400).json({ message: "El nombre de usuario debe ser un string"})
        }

        // Verificar si el nombre de usuario ya existe
        const existingUser = await pool
            .request()
            .input('NombreUsuario', sql.VarChar, NombreUsuario)
            .query('SELECT * FROM Usuario WHERE NombreUsuario = @NombreUsuario');

        if (existingUser.recordset.length > 0) {
            return res.status(400).json({ message: "El nombre de usuario ya existe." });
        }

        //Verificar contrasenia
        if (!Contrasenia || Contrasenia.length < 6) {
            return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres." });
        }

        if (typeof Contrasenia != "string") {
            return res.status(400).json({ message: "La contraseña debe ser un string"})
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(Contrasenia, SALT_ROUND);

        // Insertar nuevo usuario en la base de datos
        const result = await pool
            .request()
            .input('NombreUsuario', sql.VarChar, NombreUsuario)
            .input('Nombre', sql.VarChar, Nombre)
            .input('Contrasenia', sql.VarChar, hashedPassword)
            .input('Email', sql.VarChar, Email)
            .query('INSERT INTO Usuario (NombreUsuario, Nombre, Contrasenia, Email) VALUES (@NombreUsuario, @Nombre, @Contrasenia, @Email); SELECT SCOPE_IDENTITY() AS IdUsuario');

        res.status(201).json({
            id: result.recordset[0].IdUsuario,
            NombreUsuario,
            Nombre,
            Email
        });
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        res.status(500).json({ message: "Error al registrar el usuario." });
    }
};

export const loginUser = async (req, res) => {
    const { NombreUsuario, Contrasenia } = req.body;

    try {
        const pool = await getConnection();
        const user = await pool
            .request()
            .input('NombreUsuario', sql.VarChar, NombreUsuario)
            .query('SELECT * FROM Usuario WHERE NombreUsuario = @NombreUsuario');

        if (user.recordset.length === 0) {
            return res.status(400).json({ message: "El nombre de usuario no existe." });
        }


        const isValid = await bcrypt.compare(Contrasenia, user.recordset[0].Contrasenia);
        if (!isValid) {
            return res.status(400).json({ message: "Contraseña incorrecta." });
        }   

        if (!NombreUsuario || !Contrasenia) {
            return res.status(400).json({ message: "Faltan credenciales." });
        }
        
        const { Contrasenia: _, ...publicUser } = user.recordset[0];

        res.json(publicUser);
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ message: "Error al iniciar sesión." });
    }
};

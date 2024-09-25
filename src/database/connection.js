import sql from 'mssql';



export const getConnection = async () => {

    const dbSettings = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, 
        server: process.env.DB_SERVER,
        database: process.env.DB_DATABASE,
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
        connectionTimeout: 30000, 
    };

    try {
        const pool = await sql.connect(dbSettings);
        console.log("Conectado a la base de datos!");
        return pool;
        
    } catch (error) { //
        if (error instanceof sql.ConnectionError) {
            console.error("Error de conexión:", error.message);
        } else {
            console.error("Otro error:", error.message);
        }
        console.log("Error al conectarse a la base de datos");
    }
};

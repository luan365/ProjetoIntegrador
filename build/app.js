//importação dos moduloes necessários
import oracleDB from "oracledb";
import express  from "express";
import dotenv from "dotenv";

// configurar o servidor web com express
const app = express();
const port = 3000;
//daleto JSON para REQ e RES
app.use(express.json());

// Serviços de backend
app.get("/obterAeronaves", async(req,res) =>{
    // 1- Abrir conexão com o Oracle
    const conn = await oracleDB.getConnection({
        user: "ADMIN",
        password: "123456",
        connectionString: "oegar string no OCI(Oracle cloud) - HIGH"
    });
    // 2- Buscar as aeronaves(select)
    const results = await conn.execute("SELECT * FROM Aeronaves");

    // 3- Fechar conexão com o Oracle
    await conn.close();
    // 4- Devolver resultados
    res.send(results);
});
app.put("/inserirAeronave", (req,res) =>{
    // 1- Abrir conexão com o Oracle
    // 2- Inserir as aeronaves(insert)
    // 3- Fechar conexão com o Oracle
    // 4- Devolver resultados
});
app.get("/excluirAeronaves", (req,res) =>{
    // 1- Abrir conexão com o Oracle
    // 2- Excluir as aeronaves(delete)
    // 3- Fechar conexão com o Oracle
    // 4- Devolver resultados 
});
app.listen(port, () => {
    console.log("Servidor HTTP inicializado...");
});
//importação dos moduloes necessários
import oracleDB from "oracledb";
import express  from "express";
import dotenv from "dotenv";

// configurar o servidor web com express
const app = express();
const port = 3000;
// daleto JSON para REQ e RES
app.use(express.json());
// Criando uma conexão
const conn = await oracleDB.getConnection({
    user: "ADMIN",
    password: "Puc123456789",
    connectionString: "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.sa-saopaulo-1.oraclecloud.com))(connect_data=(service_name=gf8f07257ad5e78_projetointegrador_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))"
});
// Serviços de backend
app.get("/obterAeronaves", async(req,res) =>{
    // 1- Abrir conexão com o Oracle
    conn;
    // 2- Buscar as aeronaves(select)
    const results = await conn.execute("SELECT * FROM Aeronaves");

    // 3- Fechar conexão com o Oracle
    await conn.close();
    // 4- Devolver resultados
    res.send(results);
});
app.put("/inserirAeronave", (req,res) =>{
    // 1- Abrir conexão com o Oracle
    conn;
    // 2- Inserir as aeronaves(insert)
    // 3- Fechar conexão com o Oracle
    await conn.close();
    // 4- Devolver resultados
    res.send(results);
});
app.get("/excluirAeronaves", (req,res) =>{
    // 1- Abrir conexão com o Oracle
    conn;
    // 2- Excluir as aeronaves(delete)
    // 3- Fechar conexão com o Oracle
    await conn.close();
    // 4- Devolver resultados
    res.send(results);
});
app.listen(port, () => {
    console.log("Servidor HTTP inicializado...");
});
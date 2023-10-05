//importação dos moduloes necessários
import express  from "express";
import oracleDB, {Connection, ConnectionAttributes} from "oracledb";
import dotenv from "dotenv"; // Dados sensíceis é colodado no arquivo dotEnv (dot - ponto(.))
import cors from "cors"; // Serve para liberar/restringir acesso ao serviços

// configurar o servidor web com express na porta 3000
const app = express();
const port = 3000;

dotenv.config(); // "Vou usar o dotenv"
// preparar o servidor JSON para REQ e RES
app.use(express.json());
app.use(cors());

type CustomResponse = {
    status: string,
    message: string,
    payload: any
};

type Aeronave = {
    fabricante: string,
    qtdeAssentos: number,
    modelo: string;
};


// Serviços de backend
app.get("/obterAeronaves", async(req,res) =>{
    let cr: CustomResponse = {
        status: "ERROR",
        message: "",
        payload: undefined,
    };

        //conectando
        let conn;
        try{
            conn = await oracleDB.getConnection({
                user: process.env.ORACLE_DB_USER,
                password: process.env.ORACLE_DB_PASSWORD,
                connectionString: process.env.ORACLE_DB_STR
            });
        }catch(e){
            if(e instanceof Error){
                cr.message = e.message;
                console.log(e.message)
            }
        }finally{
            if(conn !== undefined){
                await conn.close();
            }
            // 4- Devolver resultados
            res.send(cr)
        }   
    // 2- Buscar as aeronaves(select)
    const results = await conn.execute("SELECT * FROM Aeronaves");

    // 3- Fechar conexão com o Oracle
    await conn.close();
});
app.put("/InserirAeronave", async(req,res) => {
    const marca = req.body.marca as string;
    const modelo = req.body.modelo as string;
    const qtdeAssentos = req.body.qtdeAssentos as number;
    const registro = req.body.registro as string;

    //correção: verificar se tudo chegoupara prosseguir com o cadastro
    //verificar se chegaram os parametros
    //VALIDAR se estão bons (qtdeAssentos não pode ser negativo)

    let cr: CustomResponse = {
        status: "ERROR",
        message: "",
        payload: undefined,
    };

    
    //conectando
    let conn; //let = variavel local | const = Variavel que nao muda | var = Variavel global - pode ser modificado em qualquer ponto do programa
    try{
        conn = await oracleDB.getConnection({
            user: process.env.ORACLE_DB_USER,
            password: process.env.ORACLE_DB_PASSWORD,
            connectionString: process.env.ORACLE_DB_STR,
        });
    }catch(e){
    }finally{}   

    conn.close;

});
app.get("/excluirAeronaves", (req,res) =>{
    
    let cr: CustomResponse = {
        status: "ERROR",
        message: "",
        payload: undefined,
    };

        //conectando
        let conn;
        try{
            conn = await oracleDB.getConnection({
                user: process.env.ORACLE_DB_USER,
                password: process.env.ORACLE_DB_PASSWORD,
                connectionString: process.env.ORACLE_DB_STR
            });
        }catch(e){
            if(e instanceof Error){
                cr.message = e.message;
                console.log(e.message)
            }
        }finally{
            if(conn !== undefined){
                await conn.close();
            }
            res.send(cr)
        }   
    // 2- Excluir as aeronaves(delete)

    // Commit para gravar no oracle
    await conn.commit();
    // 3- Fechar conexão com o Oracle
    await conn.close();
    // 4- Devolver resultados
    res.send(results);
});
app.listen(port, () => {
    console.log("Servidor HTTP inicializado...");
});
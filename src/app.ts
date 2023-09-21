//importação dos moduloes necessários
import oracleDB from "oracledb";
import express  from "express";
import dotenv from "dotenv";

// configurar o servidor web com express
const app = express();
const port = 3000;
//daleto JSON para REQ e RES
app.use(express.json());

//Serviços de backend
app.get("/listarAeronaves")
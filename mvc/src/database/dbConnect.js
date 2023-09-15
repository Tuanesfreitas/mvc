import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:tuane2023@cluster0.spvixzi.mongodb.net/eHoje");
// A função connect guarda a sting de conexão dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB. 

export default db;
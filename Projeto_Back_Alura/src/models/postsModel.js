import 'dotenv/config';
import conectarAoBanco from "../../dbConfig.js";
import { ObjectId } from "mongodb";

export async function getTodosPosts() { // Realiza a ação requisitada pelo Controller -> exibir todos os posts
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    return colecao.find().toArray();
}

export async function criarPost(novoPost) { // Realiza a ação requisitada pelo Controller -> inserir novo post
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    return colecao.insertOne(novoPost);
} 

export async function atualizarPost(id, novoPost) { // Realiza a ação requisitada pelo Controller -> atualizar o post
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    const objectID = ObjectId.createFromHexString(id); // Armazena o ID do post a ser atuzalizado
    return colecao.updateOne({_id : new ObjectId(objectID)}, {$set : novoPost});
} 


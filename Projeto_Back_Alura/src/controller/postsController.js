import fs from "fs";
import gerarDescricaoComGemini from '../services/geminiService.js';
import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) { // Requisita a ação (listar os posts em JASON) e retorna uma resposta
    const resultado = await getTodosPosts();
    res.status(200).json(resultado);
}

export async function postarNovoPost(req, res) { // Requisita a ação (fazer uma postagem) e retorna uma resposta
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro' : 'Faio!'}); // Não dar muitos detalhes do erro para o usuário
    }
}

export async function uploadImagem(req, res) { // Requisita a ação (fazer o upload de uma imagem) e retorna uma resposta
    const novoPost = {
        descricao : "",
        imgUrl : req.file.originalname,
        alt : ""
    }
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; // Vincula o ID com a imagem
        fs.renameSync(req.file.path, imagemAtualizada);  // Biblioteca nativa do Node para renomear
        res.status(200).json(postCriado);
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro' : 'Faio!'}); // Não dar muitos detalhes do erro para o usuário
    }
}

export async function atualizaNovoPost(req, res) { // Requisita a ação (atualizar o post pelo ID) e retorna uma resposta
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`; 
    
    try {
        
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imageBuffer);
        const postAtualizado = {
            descricao : descricao,
            imgUrl : urlImagem,
            alt : req.body.alt
        }
        const postCriado = await atualizarPost(id, postAtualizado);
        res.status(200).json(postCriado);
    }
    catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro' : 'Faio!'}); // Não dar muitos detalhes do erro para o usuário
    }
}
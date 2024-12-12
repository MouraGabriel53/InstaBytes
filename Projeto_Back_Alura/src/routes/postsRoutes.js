import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { listarPosts, postarNovoPost, uploadImagem, atualizaNovoPost } from '../controller/postsController.js';

const corsOptions = {
  oringin : 'http://localhost:8000',
  optionsSuccessSatus : 200
}

const storage = multer.diskStorage({ // Apenas para Windows -> não deixar salvar a imagem com nomes aleatórios numa pasta
    destination: function (req, file, cb){
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname);
    }
})

const upload = multer({dest : './uploads', storage}); // Configura e cria uma pasta uploads para armazenamento

const routes = (app) => {
    app.use(express.json()); // Converte objetos em JSON
    app.use(cors(corsOptions));
    // Rota para buscar os posts
    app.get('/posts', listarPosts); // listarPosts -> Controller que executa a função
    // Rota para inserir novo post
    app.post('/posts', postarNovoPost); // postarNovoPost -> Controller que executa a função
    app.post('/upload', upload.single('imagem'), uploadImagem); // uploadImagem -> Controller que executa a função
    app.put('/upload/:id', atualizaNovoPost); // Atualiza as imagens -> Controller que executa a função
}

export default routes; 
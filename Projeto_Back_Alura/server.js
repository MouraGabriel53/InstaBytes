import express from 'express'; // Cria um servidor a partir da biblioteca express
import conectarAoBanco from './dbConfig.js';
import routes from './src/routes/postsRoutes.js';

const app = express(); // Inicializa o servidor
app.use(express.static('uploads')); // Abre a pasta uploads -> Serve Arquivos Estáticos
routes(app);
app.listen(3000, () => { console.log('Servidor executando...') }); // Executa o servidor

function buscaPostPorID (ID) { // Retorna o objeto pelo ID - realiza uma busca dentro de um dado (array, lista)
    return posts.findIndex((post) => {
        return post.ID === Number(ID);
    });
}

app.get('/posts/:ID', (rec, res) => { // Cria uma interface / API -> acessa apenas pelo ID (dado variável)
    const index = buscaPostPorID(rec.params.ID); // Requisição tem o valor do ID
    res.status(200).json(posts[index]); // Post na posição (ID - index)
});  
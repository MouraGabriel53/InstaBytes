<h1 align="center"> InstaBytes </h1>

<p align="center">
Este projeto foi desenvolvido em parceria 🤝 com a <a href="https://www.alura.com.br/">Alura</a> e tem o objetivo de criar uma API, a qual permite os usuários publicaram e atualizarem fotos num site fictício. 
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuração-do-ambiente">Configuração do Ambiente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#problemas">Problemas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#melhorias">Melhorias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contribuições">Contribuições</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
</p>

---

## Funcionalidades

- **Publicação de fotos**: Permitir que os usuários enviem imagens e as armazenem no banco de dados.
- **Atualização de fotos**: Editar ou substituir imagens já publicadas.
- **Exibição de fotos**: Mostrar uma galeria com as imagens armazenadas.

## Tecnologias Utilizadas

- **Frontend**:
  - HTML para estruturação.
  - CSS para estilização.
  - JavaScript para interatividade no lado do cliente.
- **Backend**:
  - Node.js e Express para a criação da API.
- **Banco de Dados**:
  - MongoDB para armazenar informações sobre as imagens.

## Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone <https://github.com/MouraGabriel53/InstaBytes>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados MongoDB:**
   Certifique-se de que o MongoDB está instalado e em execução. Atualize a string de conexão no arquivo `.env` ou diretamente no código.

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

5. **Abra o projeto no navegador:**
   Acesse `http://localhost:3000`.

---

## Problemas

- **Carregamento de imagens:**
  
  As imagens publicadas não estão sendo carregadas corretamente. Isso pode ser um problema na implementação da API ou no armazenamento das imagens no MongoDB.

---

## Melhorias

- **Resolver o problema do carregamento de imagens:** Revisar o código responsável pelo upload e exibição das imagens.
- **Adicionar autenticação:** Proteger a publicação e atualização de fotos.

---

## Contribuições

Contribuições são bem-vindas! Caso encontre bugs ou tenha sugestões, abra uma *issue* ou envie um *pull request*.

---



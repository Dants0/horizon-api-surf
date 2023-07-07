<h1 align='center'>

    Horizon Surf Api Documentação

   <p align="center">
      <img alt="Linguagem mais usada na aplicação" src="https://img.shields.io/github/languages/top/Dants0/horizon-api-surf?color=171717&labelColor=FFE000">
      <img alt="Linguagens usadas" src="https://img.shields.io/github/languages/count/Dants0/horizon-api-surf?color=171717&labelColor=FFE000">
      <img alt="Último commit" src="https://img.shields.io/github/last-commit/Dants0/horizon-api-surf?color=171717&labelColor=FFE000">
  </p>  
</h1>


  <p align="center">
  <a href="#-Api"> Sobre</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Rotas"> Rotas</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Deploy"> Deploy </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Tecnologias"> Tecnologias </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Ferramentas"> Ferramentas </a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Funcionalidades"> Funcionalidades  </a>&nbsp;&nbsp;|&nbsp;&nbsp;
</p>


<div align='center'>
  <img src="https://i.ibb.co/tsRC5W1/imagem-2023-07-06-184207673.png"/>
</div>

## 🌊 Api
A Api possui todos os requisitos solicitados na atividade referentes a um campeonato de surf.

## 💨 Rotas
<ul>
  <li>
  Obter todos os surfistas cadastrados:
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer">https://horizon-campeonato-surf.onrender.com/api/v1/surfer</a>
  </li>
  <li>
  Obter todos os surfistas de determinado país
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer/country/:pais">https://horizon-campeonato-surf.onrender.com/api/v1/surfer/country/:pais</a>
  </li>
  <li>
  Obter surfista por id
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer/:id">https://horizon-campeonato-surf.onrender.com/api/v1/surfer/:id</a>
  </li>
  <li>
  Inserir surfista
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer/register">https://horizon-campeonato-surf.onrender.com/api/v1/surfer/register</a> ||
  <a href="https://i.ibb.co/k5rDZR7/imagem-2023-07-06-190229440.png">Inserção</a>
  </li>
  <li>
  Alterar surfista
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer/">https://horizon-campeonato-surf.onrender.com/api/v1/surfer/</a> ||
  <a href="https://i.ibb.co/gF16PdY/imagem-2023-07-06-192410275.png">Alterar dados</a>
  </li>
  <li>
  Apagar surfista
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/surfer/:id">https://horizon-campeonato-surf.onrender.com/api/v1/surfer/:id</a>
  </li>
  <li>
  Criar novas baterias
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/battery">https://horizon-campeonato-surf.onrender.com/api/v1/battery</a>
  </li>
  <li>
  Obter o vencedor de uma bateria
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/battery/winner/:id">https://horizon-campeonato-surf.onrender.com/api/v1/battery/winner/:id</a>
  </li>
  <li>
  Cadastrar novas ondas em uma bateria
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/wave">https://horizon-campeonato-surf.onrender.com/api/v1/wave</a>
  </li>
  <li>
  Cadastrar novas notas em uma onda
  <a href="https://horizon-campeonato-surf.onrender.com/api/v1/notes/:id">https://horizon-campeonato-surf.onrender.com/api/v1/notes/:id</a> ||
  <a href="https://i.ibb.co/9pf0j7g/imagem-2023-07-06-191955828.png">Inserir notas na onda</a>
  </li>
</ul>

## 🎉 Deploy
O projeto foi hospedado no Render e você pode conferir aqui [HorizonApi](https://horizon-campeonato-surf.onrender.com/api/v1/surfer).

## 🧪 Tecnologias
- [Node](https://nodejs.org/pt-br/docs)
- [Javascript](https://devdocs.io/javascript/)
- [NPM](https://www.npmjs.com/)
- [Express](https://expressjs.com/pt-br/)
- [Mysql](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)

## 🔧 Ferramentas
- [Insomnia](https://insomnia.rest)
- [MYSQL Workbench](https://www.mysql.com/products/workbench/)

## ✨ Funcionalidades
- [X] Inserir e excluir surfistas
- [X] Alterar nome e país de um surfista
- [X] Obter todos os surfistas cadastrados
- [X] Obter todos os surfistas de determinado país
- [X] Criar nova bateria
- [X] Cadastrar novas ondas em uma bateria
- [X] Cadastrar novas notas em uma onda
- [X] Obter o vencedor de uma bateria

#### Atualizações futuras
- [ ] Adicionar mais informações do surfista.
- [ ] Alterar as notas dos surfistas.
- [ ] Interface usuário.

**OBS:**
- Para hospedagem do banco utilizei <a href="https://www.clever-cloud.com/doc/">Clever Cloud</a>.
- Para o deploy, utilizei as minhas variávies de ambiente pré configuradas dentro do Clever Cloud.

```bash
# Clone o projeto
$ git clone https://github.com/Dants0/horizon-api-surf.git

# Instale as dependências
$ npm install

# Rode a aplicação
$ npm run start
```

---
<blockquote> Feito por Guilherme Dantas Góes 🤖</blockquote>

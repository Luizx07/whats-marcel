const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express ()

app.use((request, response, next) =>{

    response.header('Access-Control-Allow-Origin', '*')
    
    response.header('Access-Control-Allow-Methods', 'GET') 

    app.use(cors())

    next()
})

const dados = require("./modulo/funcoes")

app.get('/v1/whats/dados/pessoal/:numero', cors(), async function(request, response){

    let receber= request.params.numero
    let dadosP = dados.getListaDeDadosPessoais(receber)

    if(dadosP){
        response.status(200)
        response.json(dadosP)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado'})
    }
})

app.get('/v1/whats/perfil/:numero', cors(), async function(request, response) {

    let receber = request.params.numero
    let dadosP = dados.getDadosPerfil(receber)

    if(dadosP){
        response.status(200)
        response.json(dadosP)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado'})
    }
})

app.get('/v1/whatsapp/contatos/:numero', cors(), async function(request, response) {

    let receberDados = request.params.numero
    let dadosPessoais = dados.getDadosDeContatos(receberDados)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um contato'})
    }
})

app.get('/v1/whatsapp/conversas/:numero', cors(), async function(request, response) {
    let numero = request.params.numero
    let dadosPessoais = dados.getConversas(numero)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um contato'})
    }
})

app.get('/v1/whatsapp/conversas/', cors(), async function(request, response) {
    console.log("Query recebida:", request.query); // <-- Adicionado para debug
    
    let numeroUsuario = request.query.numero;
    let nomeContato = request.query.contato;

    if (!numeroUsuario || !nomeContato) {
        return response.status(400).json({ status: 400, message: 'Número e contato são obrigatórios' });
    }

    let conversasPorNome = dados.getConversasPorNome(numeroUsuario, nomeContato);

    if (conversasPorNome) {
        response.status(200).json(conversasPorNome);
    } else {
        response.status(404).json({ status: 404, message: 'Não foi encontrado um contato' });
    }
})

app.get('/v1/whatsapp/conversas/palavra-chave/', cors(), async function(request, response) {

    let numero = request.query.numero
    let palavra = request.query.palavra
    let contato = request.query.contato
    let dadosPessoais = getFiltrarPalavra(numero, palavra, contato)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado uma conversa'})
    }
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
  });
  
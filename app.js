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
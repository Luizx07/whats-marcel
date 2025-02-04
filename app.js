const express = require('express'); 
const app = express();  

app.get('/whats/dados-pessoais/:id', (req, res) => {
    const user = req.params.id
    const dados = getListaDeDadosPessoais(user)
    res.json(dados)
})

app.get('/whats/dados-perfil/:id', (req, res) => {
    const user = req.params.id
    const dados = getDadosPerfil(user)
    res.json(dados)
})

app.get('/whats/contatos/:numero', (req, res) => {
    const numero = req.params.numero
    const dados = dadosDeContatos(numero)
    res.json(dados)
})

app.get('/whats/conversas/:numero', (req, res) => {
    const numero = req.params.numero
    const dados = getConversas(numero)
    res.json(dados)
})

// Iniciando o servidor
app.listen('8080', () => {
    console.log(`Servidor rodando na porta 8080}`)
})
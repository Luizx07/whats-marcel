const modulo_contato = require('./contatos')

const getListaDeDadosPessoais = function(user){
    let id = user 
    let dados = []
    let usuarios = {}

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        if(String(item.id).toUpperCase() == id)
            dados.push({
            id : item.id,
            usuarios : item.account,
            numero : item.number,
            criacao : item['created-since']
            })
    })

    usuarios.dados_pessoais = dados
    
    return usuarios
    }

//console.log(getListaDeDadosPessoais(4))

const getDadosPerfil = function(user){
    let id = user 
    let dados = []
    let usuarios = {}

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        if(String(item.id).toUpperCase() == id)
            dados.push({
            id : item.id,
            nickname : item.nickname,
            foto_pefil : item['profile-image'],
            background : item.background
            })
    })

    usuarios.dados_pessoais = dados
    
    return usuarios
    }

console.log(getListaDeDadosPessoais(1))
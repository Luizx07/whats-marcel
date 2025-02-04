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

//console.log(getListaDeDadosPessoais(1))

const dadosDeContatos = function(numero){
    let user =  String(numero)
    let dados = []
    let usuarios = {}

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach (function(item2){
            if(String(item.number) == user)
                dados.push({
                name : item2.name,
                imagem : item2["image"],
                descricao : item2.description
                })
                
            })
            
            
    })

    usuarios.dados_pessoais = dados
    
    return usuarios
    }
// console.log(dadosDeContatos('11955577796'))

const getConversas = function(numero){
    let user = String(numero)
    let usuarios = {}
    let dados = []

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
            if(String(item.number) == user){
                dados.push({
                    name: item2.name,
                    profile: item2["image"],
                    description: item2.description,
                    convensas: item2.messages
                })
            }
        })
    })
    usuarios.conversas = dados

    return usuarios
}
console.log(getConversas('11955577796'))
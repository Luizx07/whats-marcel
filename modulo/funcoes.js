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
                    conversas: item2.messages
                })
            }
        })
    })
    usuarios.conversas = dados

    return usuarios
}
// console.log(getConversas('11955577796'))

const getConversasPorNome = function(numero, conta){
    let status = false
    let numb = String(numero)
    let nome = String(conta).toUpperCase()
    let usuarios = {}
    let dados = []

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){

            if(String(item.number) == numb && String(item2.name).toUpperCase() == nome){

 
                dados.push({
                    name: item2.name,
                    profile: item2["image"],
                    description: item2.description,
                    conversas: item2.messages
                })

                status = true
                
            }
        })
    })
    usuarios.conversas = dados

    if(status == true){
        return usuarios
    }else{
        return status
    }
}
// console.log(getConversasPorNome("11987876567", "Jane Smith"))

const getPalavra = function(numero, palavra, nome){
    let nick = String(nome).toUpperCase()
    let numb = String(numero)
    let filtro = String(palavra).toUpperCase()
    let conversa = {}
    let dados = []

    modulo_contato.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
            item2.messages.forEach(function(item3){
                if(String(item.number) == numb && String(item3.content).toUpperCase().includes(filtro)){
                    dados.push({
                        nome: item2.name,
                        perfil: item2.image,
                        descricao: item2.description,
                        conversas: item2.messages
                    })
                }
            })
        })
    })
    conversa.conversas = dados
    
    return conversa

 }

 console.log(getPalavra("11987876567", "Oi, como está indo o projeto?"))
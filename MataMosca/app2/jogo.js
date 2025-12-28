var altura = 0
var largura = 0
var vidas = 1
var tempo = 25
var criarMosquitoTempo = 1500

var link_nivel = window.location.search
link_nivel = link_nivel.replace('?', '')

if(link_nivel === 'facil'){
    criarMosquitoTempo = 2000
}else if(link_nivel === 'normal'){
    criarMosquitoTempo = 1500
}else if(link_nivel === 'dificil'){
    criarMosquitoTempo = 1000
}else if(link_nivel === 'impossivel'){
    criarMosquitoTempo = 750
}

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}

ajustaTamanho()

var cronometro = setInterval(function(){
    tempo -=1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    },1000)

function posicaoRandomica(){

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        if(vidas == 3){
            window.location.href = "fim_jogo.html"
        }else{
                document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX,posicaoY)

    var mosca = document.createElement('img')
    mosca.src = "imagens/mosca.png"
    mosca.className = tamanhoAleatorio() + ' ' +  ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosca)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
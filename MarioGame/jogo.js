var largura = 0
var altura = 0
var totalMarios = 0
var nivelSelecionado = ''

function ajustaTela() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTela()

function posicaoRandomica() {
    if (document.getElementById('mario')) {
        document.getElementById('mario').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mario = document.createElement('img')
    mario.src = "Mario.png"
    mario.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mario.style.left = posicaoX + 'px'
    mario.style.top = posicaoY + 'px'
    mario.style.position = 'absolute'
    mario.id = 'mario'

    document.body.appendChild(mario)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mario1'
        case 1:
            return 'mario2'
        case 2:
            return 'mario3'
    }

}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function inicioJogo() {
    const selectNivel = document.getElementById('nivel');
    nivelSelecionado = selectNivel.value;

    var label = document.getElementById('nivelabel')
    var select = document.getElementById('nivel')
    var inicio = document.getElementById('comeca')

    label.remove()
    select.remove()
    inicio.remove()

    if (nivelSelecionado === "n1") {
        loopNivel(10,1000)
    }
    else if (nivelSelecionado === "n2") {
        loopNivel(25,500)
    }
    else if (nivelSelecionado === "n3") {
        loopNivel(50,300)
    }
}

function loopNivel(quantidade,segundos){
        var numLoop = Math.floor(Math.random() * quantidade) + 1
        totalMarios = -1

        var intervalo = setInterval(function () {
            posicaoRandomica()
            totalMarios++

            if (totalMarios == numLoop) {
                clearInterval(intervalo)
                var mario = document.getElementById('mario')
                if (mario) {
                    mario.remove()
                }
                resTotalElementos()
            }
        }, segundos)
}

function resTotalElementos() {
    var container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)

    var pergunta = document.createElement('label')
    pergunta.innerHTML = 'Quantos Marios apareceram: '

    var resposta = document.createElement('input')
    resposta.type = 'text'
    resposta.id = 'resCountMario'
    resposta.placeholder = 'Quantos Marios apareceram?'

    var validar = document.createElement('input')
    validar.type = 'submit'
    validar.value = 'Enviar'

    var feedback = document.createElement('p')
    feedback.id = 'feedback'

    validar.onclick = function () {
        var valor = Number(document.getElementById('resCountMario').value)

        if (valor === totalMarios) {
            document.getElementById('feedback').innerText = 'Acertou, o Mario não esta atras do Armario'
        } else {
            document.getElementById('feedback').innerText =
                `Errou! O correto era ${totalMarios}. O Mario está atras do armario...`
        }

        setTimeout(function () {
            console.log('Retornando a pagina inicial')
            window.location.reload()
        }, 2000)
    }

    container.appendChild(pergunta)
    container.appendChild(resposta)
    container.appendChild(validar)
    container.appendChild(feedback)
}
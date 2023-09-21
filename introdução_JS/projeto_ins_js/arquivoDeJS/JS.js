function calcularIMC(){
    const peso = parseFloat(document.getElementById('peso').value)
    const altura = parseFloat(document.getElementById('altura').value)

    //is not a number para verificar se a informação inserida pelo usuario
    if(!isNaN(peso) && !isNaN(altura) && altura > 0){
        const imc = peso / (altura * altura)
        document.getElementById('resultado').textContent = imc.toFixed(2)

        if(imc<18.5){
            document.getElementById('mensagem').textContent = 'Você está abaixo do pesso'
        }
        else if(imc >= 18.5 && imc <24.9){
            document.getElementById('mensagem').textContent = 'Você está no pesso ideal'
        }
        else if(imc >= 24.9 && imc <29.9){                                                                                                                       //toFixed para fixar a conta em duas cassa decimais
            document.getElementById('mensagem').textContent = 'Você está acima do peso ideal. para a sua altura o pesso ideal seria' + (24.9 * (altura * altura)).toFixed(2)+"kg."
        }       
        else {
            document.getElementById('mensagem').textContent = 'Você está obeso do peso ideal. para a sua altura o pesso ideal seria' + (24.9 * (altura * altura)).toFixed(2)+"kg."
        }
    }
    else{
        document.getElementById('resultado').textContent = 'Informe um valor valido'
        document.getElementById('mensagem').textContent = ''
    }

}
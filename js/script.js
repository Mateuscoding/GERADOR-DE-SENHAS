
let btnGerar = document.querySelector('#gerar')
let senhaGerada = document.querySelector('#senha')
let divSenha = document.querySelector('#divSenha')
let btnCopiar = document.querySelector('#copiar')
let letras = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'

let numeros = '0123456789'



btnGerar.addEventListener('click', ()=>{

    let digitos = parseInt(document.querySelector('#tamanho-senha').value)
    // console.log(digitos)

    let senha = ''

    for(let i = 0; i <= digitos; i++){

        let letrasOuNumeros = Math.floor(Math.random()*2)

        if(letrasOuNumeros > 0){
            
            let letra = Math.floor(Math.random()*52)

            senha += letras[letra]
            
            // console.log(letras[letra])

        }else{

            let numero = Math.floor(Math.random()*10)
            senha+= numeros[numero]

            console.log(numeros[numero])

        }

    }
        
    divSenha.classList.remove('of')
    senhaGerada.textContent = senha

})


btnCopiar.addEventListener('click', ()=>{
        alert('Senha copiada com sucesso!')
        navigator.clipboard.writeText(senhaGerada.textContent)
    }
)
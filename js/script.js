
let btnGenerate = document.querySelector('#generate')
let newPassoword = document.querySelector('#password')
let responseContainer = document.querySelector('#response-container')
let btnCopy = document.querySelector('#copy')

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789'

function generatePassword(length){ // Função limitada a quantidade de caracteres (length) para gerar uma letra ou número aleatório da variável "characters"

    return length == 0?' ': 
        characters.charAt(Math.floor(Math.random() * characters.length)) + generatePassword(length -1)
}

btnGenerate.addEventListener('click', ()=>{
    
    let length = parseInt(document.querySelector('#length-password').
    value)
    
    responseContainer.classList.remove('of')
    newPassoword.textContent = generatePassword(length)
       
})

btnCopy.addEventListener('click', ()=>{ // Função do botão para copiar a senha (Ctrl c + Ctrl v )
        alert('Senha copiada com sucesso!')
        navigator.clipboard.writeText(newPassoword.textContent)
    }
)





// btnGenerate.addEventListener('click', ()=>{

//     let digitos = parseInt(document.querySelector('#tamanho-senha').value)

//     let senha = ''

//     for(let i = 0; i <= digitos; i++){

//         let letrasOuNumeros = Math.floor(Math.random()*2)
//         if(letrasOuNumeros > 0){
//             let letra = Math.floor(Math.random()*52)
//             senha += letras[letra]
//         }else{
//             let numero = Math.floor(Math.random()*10)
//             senha+= numeros[numero]
//         }
//     }  
//     responseContainer.classList.remove('of')
//     newPassoword.textContent = senha
// })
// FAZ REFERENCIA AOS ELEMNTOS DOM
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const divisao = document.querySelector('.divisao')
const adicao = document.querySelector('adicao')
const subtracao = document.querySelector('subtracao')
const multiplicacao = document.querySelector('multiplicaco')

// alert(numero1)
// CRIAR A FUNÇÃO 
function calcular(){
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        const adicao = `A soma de ${n1} e ${n2} = ${n1+n2}`
        alert(adicao)
    } else {
        alert('Por favor, digite um número correto.')
    }
    //alert('Resultado :' + resultado)
}
    
}

// ADICIONAR ESCUTAR DE EVENTOS
btnCalcular.addEventListener('click', function(){
    calcular()
})
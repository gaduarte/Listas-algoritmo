const prompt = require('prompt-sync')()

function main(){

    var aleatorio = Math.random(0,100)
    let n = Number(prompt('Insira um valor: '))
    
    let c = 0

    while (!(n === aleatorio)){
         n = Number(prompt('Insira um valor: '))
        if(aleatorio > n){
            console.log('Maior')
            console.log(aleatorio)
            
        }else if(n> aleatorio){
            console.log('Menor')
            console.log(aleatorio)
        }else{
            
        }
        c++
        
    }
    console.log(contador,aleatorio)
}

main()
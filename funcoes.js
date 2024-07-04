function soma(n1,n2){
    let soma = n1 + n2 
    return soma 

}

console.log(soma(2,3))

function comparaSenha(senhaCorreta, senhaEscrita){
    if(senhaEscrita == senhaCorreta){
        console.log('Conectado')
    }else {
        console.log('Senha incorreta')
    }
}
comparaSenha(senhaCorreta, 'morango') 
comparaSenha(senhaCorreta, 'batatapodre')

function fatorial(N){
for (let i=1; i<=N; i++){
    resposta=resposta * i 
}
return resposta 
}
let n = fatorial(10)
console.log('O fatorial de 5 é', n);

function ehPar(N){
    if(N % 2 ==0){
        console.log(N, 'é par');
    }else{
        console.log(N, 'é impar');
    }
}
ehPar(4)
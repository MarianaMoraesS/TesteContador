let vogais = ["a","e","i","o","u"];
let contadorConsoantes = 0;
let contadorVogais = 0;

let entrada = document.querySelector("body input");

function clicar(){
    verificar(entrada.value);
}

// professor: não tinha a funcção a cima e era do seguinte jeito
// botao.onclick = function(){
    // let palavra = inputPalavra.value.toLowerCase();
    // let numVogais = 0;
// } to lower case é para considerar as letras maiusculas

function verificar(valorDeEntrada){
    for(let letra of valorDeEntrada){
        for(let vogal of vogais){
            // console.log("+letra","+vogais");
            if(letra == vogal){
                // a linha de cima tem tres igua para comparação
                contadorVogais++;
                // console.log("vogais");
                break;
            }
        }
    }

    let consoante = valorDeEntrada.length - contadorVogais;
    console.log(consoante);
    
    if(consoante > contadorVogais){
        alert("Marcos ganhou");
    }else{
        alert("Ana ganhou");
    }
}



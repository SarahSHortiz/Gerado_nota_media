function gerarMedia(){
    const nota1Input = document.getElementById('nota1').value;
    const nota2Input = document.getElementById('nota2').value;
    const nota3Input = document.getElementById('nota3').value;

    const nota1 = parseFloat(nota1Input);
    const nota2 = parseFloat(nota2Input);
    const nota3 = parseFloat(nota3Input);

    // parseFloat() para realizar a conversão dos valores em formato de string para números de ponto flutuante (float). Os resultados dessas conversões são atribuídos às variáveis nota1, nota2 e nota3, respectivamente.

    // se o número foi verdadeiro, ou seja, um numero, ele será aceito
    // O operador lógico || (ou) é usado para combinar as três verificações. Portanto, se qualquer uma das três variáveis contiver um valor que não pode ser convertido em um número válido, a condição do if será verdadeira.
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        document.getElementById('media').textContent = " Por favor digite números em todos os campos";
        return;

        // em textContent ele vai retornar um texto ao usuário
    }
        const media = (nota1 + nota2 + nota3) / 3;
        document.getElementById('media').textContent= "a média é " + media.toFixed(2);

        // após comar e dividir a conta matemática, ele gera um texto exibindo a médio, deixando a média fixa, pois será ela que sempre vai estar operando

        // document.getElementById('media') é usado para obter o elemento HTML com o ID "media". O método .textContent é usado para definir o texto desse elemento. No exemplo, o texto definido é "A média é: " concatenado com o valor da média. O método .toFixed(2) é usado para formatar o valor da média com duas casas decimais.
    }


    
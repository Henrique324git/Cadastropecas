let peso = 100;

if(peso >= 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada")
} else {
    console.log("A peça não pode ser cadastrada, possui o peso mínimo")
}

let listaPecas = ["Disco de Freio", "Amortecedor", "Virabrequim", "Vela", "Bateria","Radiador" , "Correia", "Carte", "Igniçãor", "Embreagem"]


let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log("A lista ainda possui espaço para mais peças")
} else {
    console.log("Não há espaço disponivel na Lista, a capacidade máxima foi atingida")
}

let texto = "35"  //String


let nomePeca = listaPecas[0];

if(nomePeca.length > 3 ) {
    console.log("Nome de peça é válido, pode seguir com o cadastro")

} else {
    console.log("Nome de peça inválido, o nome deve ter mais de 3 caracteres")
}
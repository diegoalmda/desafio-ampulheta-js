// Valor de entrada do tamanho (n) da ampulheta
const n = 20;

// O valor de entrada precisa ser maior ou igual a 20 conforme instruções
if(n >= 20) {
  // Armazena o valor da metade do valor de entrada
  const halfNumber = Math.floor(n / 2);
  
  //função que imprime a ampulheta
  function printHourglass(matrix) {
    for (let i = 0; i < matrix.length; i++){
      let matrixLine = "";
      for (let j = 0; j < matrix[i].length; j++){
        matrixLine += matrix[i][j];
      }
      console.log(matrixLine);
    }
  }
  
  // função de criação da estrutura base da ampulheta
  function createHourglass() {
    let matrix = new Array(n).fill(" ");
    matrix = matrix.map(line => new Array(n).fill(" ")); // preenche as células da matriz com espaços vazios

    for(let lin = 0; lin < n ; lin++){
      for(let col = 0; col < n ; col++) {

        // insere '#' na diagonal principal
        if(lin === col) {
            matrix[lin][col] = "#";
        }        

        // insere '#' em cima, embaixo e nas laterais da matriz
        matrix[0][col] = "#";
        matrix[n - 1][col] = "#";
        matrix[lin][0] = "#";
        matrix[lin][n - 1] = "#";
        
        // insere '#' na diagonal secundária
        matrix[lin][n - 1 - lin] = "#";
      }
    }   
    return matrix;       
  }  
  
  // função que preenche a parte de baixo da ampulheta com areia
  function fillTheBottom(matrix) {    
    for(let lin = 0; lin < n ; lin++){
      for(let col = 0; col < n ; col++) {

        // Insere areia 
        if((lin > col) && (lin > halfNumber) && (col > (n - 1 - lin))) {
          matrix[lin][col] = "#";
        }              
      }
    }
    return matrix;        
  }

  const EmptyHourglass = createHourglass();  
  const hourglass = fillTheBottom(EmptyHourglass);
  printHourglass(hourglass);

} else {
  console.log("Não foi possível criar uma ampulheta com esse valor de entrada!!");
}
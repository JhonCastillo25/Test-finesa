///Cree una función o programa que ordene y retorne una matriz de números según el criterio de ordenamiento.

///La función recibirá un listado (por ejemplo [1, 4, 5, 8, 10]) y 
///un parámetro adicional para indicar si debe ordenar de menor a mayor o de mayor a menor.

function ordenar(arreglo, orden){
    if (orden==1){
        for (i=0; i<arreglo.length -1 ; i++){
            for (j=0; j<arreglo.length - i-1; j++){
                if(arreglo[j]>arreglo[j+1]){
                   [arreglo[j],arreglo[j+1]] = [arreglo[j+1],arreglo[j]]
                }
            }
         }
    }else if(orden==0){
        for (i=0; i<arreglo.length -1 ; i++){
            for (j=0; j<arreglo.length - i-1; j++){
                if(arreglo[j]<arreglo[j+1]){
                   [arreglo[j],arreglo[j+1]] = [arreglo[j+1],arreglo[j]]
                }
            }
         }
    }else{
        console.log("orden no especificado")
    }
     console.log(arreglo)
}

let arreglo=[3,5,7,2,1,9,10,5]

// el parametro orden indica si se ordena de menor a mayor (1) o de mayor a menor (0)
ordenar(arreglo,1)
ordenar(arreglo,0) 
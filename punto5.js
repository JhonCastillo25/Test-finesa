/*Cree un función o programa que calcule quién gana más partidas al piedra, papel, tijera (Mejor de 3). 
El resultado puede ser: "J1", "J2" o "Empate".

La función recibe un listado que contiene pares, representando cada jugada.
 El par puede contener combinaciones de "R" (piedra), "P" (papel) o "T" (tijera).

Ejemplo: Entrada: [("R","T"), ("T","R"), ("P","T")] => Resultado: "J2". */
let triunfo_j1=0
let triunfo_j2=0
let empates=0

function combate (J1,J2){
    
    let estado
    if(J1 == J2){
        estado = "Empate"
    }
    else if((J1 == 'R' && J2 == 'T')||(J1 == 'P' && J2 == 'R')||(J1 == 'T' && J2 =='P')){ 
        estado = "J1"                                      
    }
    else{  
        estado = "J2"             
    }
    return estado
}

function juego(arreglo){
    
    let resultado =[]
    arreglo.forEach(element => {
        resultado.push(combate(element[0],element[1]))
    });
    console.log(resultado)

    resultado.forEach(element =>{
        
        if (element=="J1"){
            triunfo_j1++
        }
        else if( element == "J2"){
            triunfo_j2++
        }
        else{
            empates++
        }

    })
    if (triunfo_j1>triunfo_j2 && triunfo_j1>empates){
        console.log("resultado: J1")
    }else if(triunfo_j2>triunfo_j1 && triunfo_j2>empates){
        console.log("resultado: J2")
    }else{
        console.log("resultado: Empate")
    }
}
entrada=[["R","T"], ["T","R"], ["P","T"]]
console.log(entrada)
juego(entrada)

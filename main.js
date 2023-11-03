
//creamos un array con la informacion de los 5 coches

const arrayCoches = [

    {
     coche:"Bugatti Chiron Super Sport 300+",
     potencia:"1,500+ caballos de fuerza",
     motor:"8.0 litros W16",
     foto:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/09/bugatti-chiron-super-sport-300.jpg"
    },

     {
     coche:"Koenigsegg Jesko",
     potencia:"1,600+ caballos de fuerza",
     motor:"V8 de 5.0 litros",
     foto:"https://hips.hearstapps.com/hmg-prod/images/koenigsegg-jesko-1626446571.jpg?crop=0.631xw:0.471xh;0.233xw,0.319xh&resize=1200:*"
    },

     {
     coche:"Hennessey Venom F5",
     potencia:"1,800+ caballos de fuerza",
     motor:"V8 de 6.6 litros",
     foto:"https://hips.hearstapps.com/hmg-prod/images/hennessey-venom-f5-1637693051.jpg?crop=0.706xw:0.612xh;0.137xw,0.249xh&resize=640:*"
    },

     {
     coche:"Rimac C_Two",
     potencia:"1,900+ caballos de fuerza",
     motor:"Eléctrico",
     foto:"https://img.remediosdigitales.com/aeddf5/rimac-c_two-2019/1366_2000.jpg"
    },
     

     {
     coche:"Lamborghini Sian",
     potencia:"800+ caballos de fuerza",
     motor:"V12 híbrido",
     foto:"https://upload.wikimedia.org/wikipedia/commons/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg"
    },   

]

//hacemos un const para pillar la length del array (para ver cuanto durara el bucle)

const arrayLength = arrayCoches.length

//variable no fija para poder ir poniendo los divs con la informacion de los coches

let cochesCards =''
//for que dura el numero de elementos del array (0 coche - 1 potencia - 2 motor - 3 foto)
for(let i=0;i<arrayLength;i++){

    //variable que cambia le metemos el div del bootrstrap pero, el h5, sera el contenido del array posicion i de coche, el primer p sera el contenido del array posicion i de potencia , el segundo p sera el contenido del array posicion i de motor, y la img sera el contenido del array posicion i de la url de la imagen (foto)
     cochesCards +=`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top"  style="height:160px" src="${arrayCoches[i].foto}" style="height: 160px; alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${arrayCoches[i].coche}</h5>
                  <p class="card-text"><strong>Potencia: </strong>${arrayCoches[i].potencia}</p>
                  <p class="card-text"><strong>Motor: </strong>${arrayCoches[i].motor}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    `;
    //document query selector para pillar el div contenedor y con innerhtml metemos la variable no estatica que es cochesCards y generara las cards directamente al iniciar al html porque no llamamod a ni una funcion
        document.querySelector('#contenido').innerHTML = cochesCards


}

//variable para pillar boton y decir que haga una funcion al clickarle que sera la id del boton para comparar
const botonComparar = document.querySelector('#botonComparar')
botonComparar.addEventListener('click',comparar)

    function comparar(){
        //console log para comprobar que funciona la funcion
       // console.log('hola!!')

       //hacemos dos querySelector uno para el selectOption 1 y otro para el segundo
       const select1 = document.querySelector('#inputGroupSelect01');
       const select2 = document.querySelector('#inputGroupSelect02');
     
       //pillamos los valores del document.querySelector
       const cocheComparacion1 = select1.value;
       const cocheComparacion2 = select2.value;
     //comprobamos si funciona con un console log
       console.log(cocheComparacion1);
       console.log(cocheComparacion2);
    

    //hacemos un let para los valores de una tabla no le ponemos valor porque es una objeto variable, y le meteremos para hacer una tabla

    let arrayComparacion1 = []
    let arrayComparacion2 = []

    //hacemos un for para comparar el option del select con todos los coches del array de coches, entonces cuando encuentra una comparacion, pone en el let el valor de la comparacion para capturarlo
    for(i=0;i<arrayLength;i++){
        if(cocheComparacion1==arrayCoches[i].coche){
          arrayComparacion1[0] = arrayCoches[i].coche
         console.log(arrayComparacion1[0])
          arrayComparacion1[1] = arrayCoches[i].potencia
          console.log(arrayComparacion1[1])
          arrayComparacion1[2] = arrayCoches[i].motor
          console.log(arrayComparacion1[2])
        }
    }
    //lo mismo pero con la segunda comparacion
    for(i=0;i<arrayLength;i++){
        if(cocheComparacion2==arrayCoches[i].coche){
          arrayComparacion2[0] = arrayCoches[i].coche
         console.log(arrayComparacion2[0])
          arrayComparacion2[1] = arrayCoches[i].potencia
          console.log(arrayComparacion2[1])
          arrayComparacion2[2] = arrayCoches[i].motor
          console.log(arrayComparacion2[2])
        }
    }

    
    //dentro de la tabla de html metemos el codigo para hacer un thead y un tbody, con un let

    let tablaComparativa1 = `
    
    <thead>
    <tr>
    <td>Coche</td> <td>Potencia</td> <td>Motor</td>
    </tr>
    </thead>
    <tbody>
    `
    //este bucle es para meter los tds, del array comparacion 1
    for(i=0;i<3;i++){
        tablaComparativa1+= `<td>${arrayComparacion1[i]}</td>`
    }
    
    tablaComparativa1+=`</tbody>`
//innerHTML para meter la tabla
    document.querySelector('#tablaComparacion1').innerHTML = tablaComparativa1

 //dentro de la tabla de html metemos el codigo para hacer un thead y un tbody, con un let
    let tablaComparativa2 = `
    
    <thead>
    <tr>
    <td>Coche</td> <td>Potencia</td> <td>Motor</td>
    </tr>
    </thead>
    <tbody>
    `
     //este bucle es para meter los tds, del array comparacion 1
    for(i=0;i<3;i++){
        tablaComparativa2+= `<td>${arrayComparacion2[i]}</td>`
    }
    
    tablaComparativa2+=`</tbody>`
    //innerHTML para meter la tabla
    document.querySelector('#tablaComparacion2').innerHTML = tablaComparativa2



    }
//pillamos boton y hacemos una funcion al clickar en este para la comparacion de caballos
const botonCaballos = document.querySelector('#botonCaballos')
botonCaballos.addEventListener('click',comparaCaballos)

function comparaCaballos(){
//console log para ver si hemos pillado bien el boton
//console.log('holaaa')
//pillamos input para los numeros de los caballos
let caballoInput = document.querySelector('#numeroCaballos')
//comprobamos si lo pilla bien
//console.log(caballoInput.value)
//hacemos un sistema el cual si ponen un numero mayor que 9999 no hara nada y dira que no es correcto

//hacemos un array con los numeros de los caballos de los coches

const arrayCochesCaballos = [
    {coche: "Bugatti Chiron Super Sport 300+",
     caballos:1500},
     {coche: "Koenigsegg Jesko",
     caballos:1600},
     {coche: "Hennessey Venom F5",
     caballos:1800},
     {coche: "Rimac C_Two",
     caballos:1900},
     {coche: "Lamborghini Sian",
     caballos:800},

]
//objeto vacio porque le vamos a meter la lista
let listaCaballos = ''
//si el input del caballo es mayor que 9999 dara un mensaje y no hara nada
if(caballoInput.value<10000){
    //comprobamos si todo nos da bien los valores
   // console.log('tu numero esta bien')
   // console.log(caballoInput.value)
    //vaciamos html para cada vez que le pongamos valor
    document.querySelector('#prohibido').innerHTML = ''
//for que recorrera todo el array
    for(i=0;i<arrayLength;i++){
        //si el input que ponemos de numero es menor que el input que compara con el array de arrayCochesCaballos...
        if(caballoInput.value<arrayCochesCaballos[i].caballos){
            //console log para ver si lo pilla bien
            //console.log(arrayCochesCaballos[i].caballos)
            //console.log(arrayCochesCaballos[i].coche)
           
            //le sumamos una lista a listaCaballos que pondra del array que salga el coche y los caballos

            listaCaballos+=
            `
            
            <li>Coche con más caballos: ${arrayCochesCaballos[i].coche}</li>
            <li>Caballos: ${arrayCochesCaballos[i].caballos}</li>
        `
        }
       

    }
//pillamos variable date y pillamos horas, minutos y segundos
    const fecha = new Date()
    const hora = fecha.getHours()
    const minutos = fecha.getMinutes()
    const segundos = fecha.getSeconds()
//comprobamos si funciona
 //   console.log(`${hora}:${minutos}:${segundos}`)
 //lo metemos en el html con innerHTML
    document.querySelector('#fecha').innerHTML= `${hora}:${minutos}:${segundos}`
//innerHTML para poner la lista
    document.querySelector('#listaUl').innerHTML = listaCaballos


//si el numero es mayor a 9999 dira que no es correcto y no hara nada
}else{
    document.querySelector('#prohibido').innerHTML = ' TU NUMERO NO ES CORRECTO'
}   
  
}



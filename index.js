const input_text = document.getElementById('input_text')
const encriptar_button = document.getElementById('captura_texto')
const desencriptar_button = document.getElementById('desencriptar')


//EVENTO
function encriptar (){

    //ARRAYS
    const list_text = [] 
    const palabras__encriptadas = []


    //caputra letras
    const show = input_text.value

    //LOWER CASE
    const lowercase = show.toLowerCase()

    //alamcenamieto al array
    list_text.push(lowercase)

    for(let letra of list_text){
        
        letra = letra.replaceAll('e','enter');
        letra = letra.replaceAll('i','imes');
        letra = letra.replaceAll('a','ai');
        letra = letra.replaceAll('o','ober');
        letra = letra.replaceAll('u','ufat');
        letra = letra.replaceAll(' ',' ');


        palabras__encriptadas.push(letra)
    }

    //PRUEBAS DE CONSOLA
    //console.log(list_text)
    console.log('el mensaje fue encriptado', palabras__encriptadas)
    alert(' se ha encriptado el mensaje')

    return palabras__encriptadas
    
    
}

function desencriptar_texto(){

    //ARRAYS
    const list_text = [] 
    const palabras__desencriptadas = []

    //caputra letras
    const show = input_text.value

    //LOWER CASE
    const lowercase = show.toLowerCase()

    //alamcenamieto al array
    list_text.push(lowercase)

    for(let letra of list_text){
        
        letra = letra.replaceAll('enter','e');
        letra = letra.replaceAll('imes','i');
        letra = letra.replaceAll('ai','a');
        letra = letra.replaceAll('ober','o');
        letra = letra.replaceAll('ufat','u');
        letra = letra.replaceAll(' ',' ');


        palabras__desencriptadas.push(letra)
    }

    //PRUEBAS DE CONSOLA
    //console.log(list_text)
    console.log('palabras desencriptadas', palabras__desencriptadas)
    alert('el mensaje a sido desencriptado')

    return palabras__desencriptadas

}


//EVENTS
encriptar_button.addEventListener('click', encriptar)
desencriptar_button.addEventListener('click', desencriptar_texto)

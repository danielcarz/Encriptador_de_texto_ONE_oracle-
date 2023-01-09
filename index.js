const input_text = document.getElementById('input_text')
const show_encripted = document.getElementById('show_encripted')
const encriptar_button = document.getElementById('captura_texto')
const desencriptar_button = document.getElementById('desencriptar')


//EVENTO
function encriptar_texto (){

    //ARRAYS
    const list_text = [] 
    const palabras__encriptadas = []


    //captura letras
    const show = input_text.value

    //to LOWER CASE
    const lowercase = show.toLowerCase()

    //almacenamieto al array
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

    input_text.value = ""
    
    palabras__encriptadas.map(item => {

 
        const text_encripted = item
        input_text.value = text_encripted
        

    })
    
    //PRUEBAS DE CONSOLA
    
    console.log('el mensaje fue encriptado', palabras__encriptadas)
    alert(' se ha encriptado el mensaje')

    
    return palabras__encriptadas
    
    
}

function desencriptar_texto(){

    //ARRAYS
    const encripted_list_text = [] 
    const palabras__desencriptadas = []

    //captura letras
    const show = input_text.value

    //LOWER CASE
    const lowercase = show.toLowerCase()

    //alamcenamieto al array
    encripted_list_text.push(lowercase)

    for(let letra of encripted_list_text){
        
        letra = letra.replaceAll('enter','e');
        letra = letra.replaceAll('imes','i');
        letra = letra.replaceAll('ai','a');
        letra = letra.replaceAll('ober','o');
        letra = letra.replaceAll('ufat','u');
        letra = letra.replaceAll(' ',' ');


        palabras__desencriptadas.push(letra)
    }

    palabras__desencriptadas.map(item => {
        const desencripted = input_text.value = item
        encripted.appendChild(desencripted)
    })

    //PRUEBAS DE CONSOLA
    
    console.log('palabras desencriptadas', palabras__desencriptadas)
    alert('el mensaje a sido desencriptado')

    return palabras__desencriptadas

}


//EVENTS
encriptar_button.addEventListener('click', encriptar_texto)
desencriptar_button.addEventListener('click', desencriptar_texto)

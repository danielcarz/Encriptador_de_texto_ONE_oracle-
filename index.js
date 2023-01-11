//TEXT
const ingresar_texto = document.getElementById('input_text')
const no_hay_mensaje = document.getElementById('unencrypted text')
const show_encripted = document.getElementById('show_encripted')

//BUTTONS
const encriptar_button = document.getElementById('encrypt_text_button')
const copiar_texto_button = document.getElementById('copy_text_button')
const desencriptar_button = document.getElementById('decrypt_text_button')
const aceptar_button =  document.getElementById('accept_button')


const encriptador_container =  document.getElementById('encrypt_container')



//EVENTO
function encriptar_texto (){

    //ARRAYS
    const texto = [] 
    const texto_encriptado = []


    //captura letras
    const capturar_texto = ingresar_texto.value

    //to LOWER CASE
    const texto_minuscula = capturar_texto.toLowerCase()

    //almacenamieto al array
    texto.push(texto_minuscula)

    
    if(texto[0] === ''){
        no_hay_mensaje.style.display = 'flex'
        encriptador_container.style.opacity = '0.0'
    }

    
    for(let letra of texto){
        
        letra = letra.replaceAll('e','enter');
        letra = letra.replaceAll('i','imes');
        letra = letra.replaceAll('a','ai');
        letra = letra.replaceAll('o','ober');
        letra = letra.replaceAll('u','ufat');
        letra = letra.replaceAll(' ',' ');


        texto_encriptado.push(letra)
    }

    
    
    
    texto_encriptado.map(item => {

        const text_encripted = item
        ingresar_texto.value = text_encripted
               
    })
    

    return texto_encriptado
    
    
}

function desencriptar_texto(){

    //ARRAYS
    const texto_encriptado = [] 
    const palabras__desencriptadas = []

    //captura letras
    const captura_texto_encriptado = ingresar_texto.value

    //LOWER CASE
    const lowercase = captura_texto_encriptado.toLowerCase()

    //alamcenamieto al array
    texto_encriptado.push(lowercase)

    if(texto_encriptado[0] === ''){
        no_hay_mensaje.style.display = 'flex'
        encriptador_container.style.opacity = '0.0'
    }

    for(let letra of texto_encriptado){
        
        letra = letra.replaceAll('enter','e');
        letra = letra.replaceAll('imes','i');
        letra = letra.replaceAll('ai','a');
        letra = letra.replaceAll('ober','o');
        letra = letra.replaceAll('ufat','u');
        letra = letra.replaceAll(' ',' ');


        palabras__desencriptadas.push(letra)
    }

    palabras__desencriptadas.map(item => {
        const desencripted = ingresar_texto.value = item

        //encripted.appendChild(desencripted)
    })



    return palabras__desencriptadas

}

function copiar_texto (){
       
        ingresar_texto.select();
        ingresar_texto.setSelectionRange(0, 99999)
        document.execCommand('copy')
}

function quitar_mensaje (){
    if(aceptar_button){
        
            no_hay_mensaje.style.display = 'none'
            encriptador_container.style.opacity = '1.0'
            
        
    }
}

//EVENTS
encriptar_button.addEventListener('click', encriptar_texto)
desencriptar_button.addEventListener('click', desencriptar_texto)
copiar_texto_button.addEventListener('click', copiar_texto)
aceptar_button.addEventListener('click', quitar_mensaje)

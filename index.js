const input_text = document.getElementById('input_text')
const encriptar_button = document.getElementById('captura_texto')
const desencriptar_button = document.getElementById('desencriptar')


function desencriptar_texto(){

}

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
    console.log(list_text)
    console.log('palabras encriptadas', palabras__encriptadas)
    alert(lowercase)
}




//EVENTS
const text_encripted = encriptar_button.addEventListener('click', encriptar)
//console.log('text encripted', text_encripted)
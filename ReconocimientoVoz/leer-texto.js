const texto = document.querySelector('.texto');
const btnLeer = document.querySelector('.btn-leer');

btnLeer.addEventListener('click', () => {
/*creamos un constructor ocn "const" y le pasamos una clase
lo que hace es generar diferentes propiedades a la cual le podemos pasar tanto el texto, volumen, voz, etc */
    const locutor = new SpeechSynthesisUtterance()
    //para la voz usaremos otra clase (SpeechSynthesis)
    //sera la clase que se encargue de hablar
    const voz = window.speechSynthesis
    locutor.text = texto.value
    voz.speak(locutor)
})
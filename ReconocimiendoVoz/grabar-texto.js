const btnGrabar = document.querySelector('.btn-grabar');
const contenido = document.querySelector('.contenido');
const body = document.querySelector('.body');

//creamos la variable para el reconocimiento de voz
const reconocimientoVoz = window.SpeechRecognition || window.webkitSpeechRecognition;
//lo suiguiente genera una clase con la que podemos llamar
//a diferentes propiedades que luego la //transformaremos en funciones que son 2:
const reconocimiento = new reconocimientoVoz()

reconocimiento.onstart = () => {
	contenido.innerHTML = 'estamos grabando la voz..'
}

reconocimiento.onresult = (e) => {
   let mensaje = e.results[0][0].transcript
   leerCondicion(mensaje)
}

const leerCondicion = (mensaje) => {
	const voz = new SpeechSynthesisUtterance();
	if(mensaje.includes('canal')){
		voz.text = 'No me pareces tan bueno'
	}
	else if(mensaje.includes('oscuro')){
		body.classList.add("oscuro")
	}else{
		voz.text = mensaje
	}
	window.speechSynthesis.speak(voz)
}

const leer = (mensaje) => {
   const voz = new SpeechSynthesisUtterance();
   voz.text = mensaje
   window.speechSynthesis.speak(voz)
}

btnGrabar.addEventListener('click', () => {
	reconocimiento.start()
})
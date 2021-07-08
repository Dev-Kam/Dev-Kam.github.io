const btnReaccion = document.getElementById('reaccion');
const contenedorListaMusic = document.getElementById('lista-music');
const controles = document.getElementById('controles');

const menuMusic = document.getElementById('menuMusic');
const titlePlaylist = document.getElementById('titlePlaylist');
const playDescription = document.getElementById('playDescription');
const imgAlbum = document.getElementById('imgAlbum');
const album = document.getElementById('album');

//Eventos
btnReaccion.addEventListener('click', likear);
menuMusic.addEventListener('click', cargarInfo);
//el evento para cuando hagamos click reproduzca la musica:
contenedorListaMusic.addEventListener('click', reproducirMusica);
//Controles para anterior y posterior de la musica:
controles.addEventListener('click', controlar)
    //Funciones
let estado = 0;

function likear() {
    if (estado === 0) {
        btnReaccion.classList.add('reaccion-activa');
        estado = 1;
    } else if (estado === 1) {
        btnReaccion.classList.remove('reaccion-activa');
        estado = 0;
    }
}


function cargarInfo(e) {
    let jsonurl = '';
    let titlePlay = '';
    let descripcionPlay = '';
    let srcImg = '';

    if (e.target.classList.contains('playEstudiar')) {
        jsonurl = 'assets/musicJSON/hiphop.json';
        titlePlay = 'El mejor Hip-hop';
        descripcionPlay = 'a disfrutar';
        srcImg = 'assets/img/modal.png';
        //album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/bg.png)";
    } else if (e.target.classList.contains('playRap')) {
        jsonurl = 'assets/musicJSON/rap.json';
        titlePlay = 'Playlist para rockear';
        descripcionPlay = 'La mejor playlist para rockear';
        srcImg = 'assets/img/ropacol.jpg';
       // album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/ropacol.jpg)"; 
    } else if (e.target.classList.contains('playJaz')) {
        jsonurl = 'assets/musicJSON/jaz.json';
        titlePlay = 'Playlist para hacer deporte';
        descripcionPlay = 'La mejor playlist para deporte';
        srcImg = 'assets/img/cerezo.jpg';
        //album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/cerezo.jpg)";

    } else if (e.target.classList.contains('playPop')) {
        jsonurl = 'assets/musicJSON/pop.json';
        titlePlay = 'Loli Hip Hop para estudiar';
        descripcionPlay = 'La mejor playlist para vos';
        srcImg = 'assets/img/cerezo.jpg';
       //album.style.background = "url(assets/img/cerezo.jpg)";
     } else if (e.target.classList.contains('playTecno')) {
        jsonurl = 'assets/musicJSON/tecno.json';
        titlePlay = 'Loli Hip Hop para estudiar';
        descripcionPlay = 'La mejor playlist para vos';
        srcImg = 'assets/img/cerezo.jpg';
     } else if (e.target.classList.contains('playElectro')) {
        jsonurl = 'assets/musicJSON/electro.json';
        titlePlay = 'Loli Hip Hop para estudiar';
        descripcionPlay = 'La mejor playlist para vos';
        srcImg = 'assets/img/cerezo.jpg';


    } else if (e.target.classList.contains('playSinfonias')) {
        jsonurl = 'assets/musicJSON/sinfonias.json';
        titlePlay = 'Loli Hip Hop para estudiar';
        descripcionPlay = 'La mejor playlist para vos';
        srcImg = 'assets/img/cerezo.jpg';
       // album.style.background = "linear-gradient(to right, rgba(2, 2, 2, 0.726) 15%, rgba(8, 8, 8, 0.829)), url(assets/img/cerezo.jpg)";

    }
    titlePlaylist.innerHTML = titlePlay;
    playDescription.innerHTML = descripcionPlay;
    imgAlbum.src = srcImg;
    cargarMusica(jsonurl);
}

//Creamos la funcion para consumir la API para los JSON:

function cargarMusica(url) {
    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            //con esto incertamos un li con los datos de todas las canciones al DOM:
            data.forEach(music => {
            	html += `
                   <li class="music">
                        <input type="text" value="${music.url}" style="display: none;">
                        <a href="#" id="${music.id}" class="btn play-music"><i class="far fa-play-circle"></i></a>
                        <h3>${music.artista}</h3> 
                        <h3 class="name" id="name">${music.nombre}</h3> 
                        <h3 class="time">--</h3>
                   </li>
            	`
            	contenedorListaMusic.innerHTML = html;
            });         
                
      });
        
}

//Funcion para el boton para las musicas:

function reproducirMusica(e) {
	if(e.target.parentElement.classList.contains('play-music')){
		let urlM = e.target.parentElement.previousElementSibling.value;
		controles.innerHTML = `
         <a href="#" class="btn control atras"><i class="fas fa-backward"></i></a>
          <audio src="${urlM}" style="width: 50vw;" controls autoplay><input type="text" value="${urlM}" style="display: none;"></audio>
          <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>
		`;
     //para que quede marcado en verde al ir escuchando la lista:
		e.target.parentElement.classList.add('reaccion-activa-reproducida');

		siguienteAutomatico();

	}
}

//Funcion para los controles de atras y delante de la lista:

function controlar(e) {
	let audio = e.target.parentElement.parentElement.children[1].children[0];
    let audioUrl = audio.value;

    let musicArray = Array.from(contenedorListaMusic.children);

    if(e.target.parentElement.classList.contains('siguiente')) {
       musicArray.forEach(limusic => {
         if(limusic.children[0].value === audioUrl){
         	let siguienteMusica = limusic.nextElementSibling.children[0].value;

         	let elementoParaReproducido = limusic.nextElementSibling.children[1];
         	//para ir hacia delante:
         	siguienteAtras(siguienteMusica, elementoParaReproducido)
         }
       });
    } if(e.target.parentElement.classList.contains('atras')){
       musicArray.forEach(limusic => {
         if(limusic.children[0].value === audioUrl){
         	let musicaAtras = limusic.previousElementSibling.children[0].value;

         	let elementoParaReproducido = limusic.previousElementSibling.children[1];
         	//para ir hacia atras:
         	siguienteAtras(musicaAtras, elementoParaReproducido)
         }
       });
    }
}


function siguienteAtras(musica, reproducida) {
	controles.innerHTML = `
         <a href="#" class="btn control atras"><i class="fas fa-backward"></i></a>
          <audio src="${musica}" style="width: 50vw;" controls autoplay><input type="text" value="${musica}" style="display: none;"></audio>
          <a href="#" class="btn control siguiente"><i class="fas fa-forward"></i></a>
		`;

		reproducida.classList.add('reaccion-activa-reproducida');

		siguienteAutomatico();
}

//Funcion para reproducir automaticamente la siguiente musica cuando termine:

function siguienteAutomatico() {
	let audioEtiqueta = controles.children[1];
	audioEtiqueta.addEventListener('ended', () => {
		let audioUrl = audioEtiqueta.children[0].value;
		let musicArray = Array.from(contenedorListaMusic.children);
		musicArray.forEach(limusic => {
            if(limusic.children[0].value === audioUrl){
         	let siguienteMusica = limusic.nextElementSibling.children[0].value;

         	let elementoParaReproducido = limusic.nextElementSibling.children[1];
         	//para ir hacia delante:
         	siguienteAtras(siguienteMusica, elementoParaReproducido)
         }
		});
	})
}
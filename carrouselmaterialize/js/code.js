//cuando cargue la pagina iniciara el carousel, luego la funcion:
document.addEventListener('DOMContentLoaded', () => {
	const elementosCarousel = document.querySelectorAll('.carousel');
//debemos iniciarlizarlo con init y pasarle 2 parametros,
//primer parametro será el carousel, osea la variable,
//el segundo parametro será un objeto:
	M.Carousel.init(elementosCarousel, {
       //duracion que queremos en milisegundos:
       duration: 1200,
       //distancia de perspectiva:
       dist: -80,
       //shift distancia de las imagenes para los costados:
       shift: 5,
       padding: 5,
       //numVisible le pasamos cuantas imagenes queremos que sean visible en pagina:
       numVisible: 3,
       //mostrar los indicadores:
       indicators: true,
       //si queremos que el slider comience con la primera imagen o no:
       noWrap: false
	});
});
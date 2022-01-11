$(document).ready(function(){
 $("#trigger").click(function() {
	 $("#contenedor > p").load("datos.txt")
	})
})
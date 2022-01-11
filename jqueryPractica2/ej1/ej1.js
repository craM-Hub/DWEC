// $(function(){
//  $("#trigger").click(function() {
// 	 $("#contenedor > p").load("datos.txt")
// 	})
// })

$(function(){
 $("#trigger").click(function() {
	  $.ajax({
          url: 'datos.txt',
          cache: false, 
          success: function (data) {
              $('#contenedor > p').html(data);
          },
      });
	})
})

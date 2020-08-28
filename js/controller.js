$(document).on("ready",main);
function main(){
	$("#btnBuscar").on("click",function(){
		var txt = "";
		var tag = $("#txtBuscar").val();
		$("#Resultado").text("Cargando...");
		$.getJSON("https://api.datos.gob.mx/v1/precio.gasolina.publico",function(datos){
			txt += '<table class="table mt-5">';
			txt += '<thead class="thead-dark"><tr><th scope="col">Razón Social</th><th scope="col">Dirección</th><th scope="col">Regular</th><th scope="col">Premium</th><th scope="col">Mapa</th></tr></thead>';
			txt += '<tbody>';
			$.each(datos.results, function(i, results){
			txt += '<tr>';
      		txt += '<th scope="row">'+results.razonsocial+'</th>';
      		txt += '<td>'+results.calle+'</td>';
      		txt += '<td>$'+results.regular+'</td>';
      		txt += '<td>$'+results.premium+'</td>';
      		txt += '<td><a class="btn btn-dark" target="_blank" href="http://maps.google.com/maps?q='+results.latitude+','+results.longitude+'">Ver mapa</a></td>';
    		txt += '</tr>';
			});
			txt += "</body>";
			txt += "</table>";
			$("#Resultado").html(txt);
		});
	});
}
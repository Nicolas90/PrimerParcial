function MostrarLogin()
{

		//alert(queMostrar);	
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#contador").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#contador").html(retorno.responseText);	
	});

	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}
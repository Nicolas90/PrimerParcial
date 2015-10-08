function MostrarLogin()
{
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#botonesABM").html("");
	});
	funcionAjax.fail(function(retorno){
		$("#botonesVotacion").html(":(");	
	});

	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}

function MostrarVotoAlta()
{	
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarVotoAlta"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#botonesABM").html("");
	});
	funcionAjax.fail(function(retorno){
		$("#botonesVotacion").html(":(");
	});
}

function MostrarVotos()
{	
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarVotos"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#botonesABM").html("");
	});
	funcionAjax.fail(function(retorno){
		$("#botonesVotacion").html(":(");
	});
}

function Mostrar(queMostrar)
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
	});
}
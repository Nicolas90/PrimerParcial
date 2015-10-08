function GuardarVoto()
{
		var provincia=$("#provincia").val();
		var candidato=$("#candidato").val();
		var sexo=$("#sexo").val();

		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarVoto",
			provincia:provincia,
			candidato:candidato,
			sexo:sexo	
		}
		});
		funcionAjax.done(function(retorno){
				Mostrar("MostrarLogin");
		});
		funcionAjax.fail(function(retorno){	
			alert("ERROR");
		});	
}

function BorrarVoto(idParametro)
{
		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarVoto",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
			Mostrar("MostrarVotos");	
	});
	funcionAjax.fail(function(retorno){	
			alert("ERROR");
	});	
}

function EditarVoto(idParametro)
{
	/*
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"TraerVoto",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		//var voto =JSON.parse(retorno);	
		//$("#id").val(cd.id);
		Mostrar("MostrarVotoAlta")

		$("#provincia").val(voto.provincia);
		$("#candidato").val(voto.candidato);
		$("#sexo").val(voto.sexo);
	});
	funcionAjax.fail(function(retorno){	
			alert("ERROR");
	});	
	
	*/
	//Mostrar("MostrarVotos");
}
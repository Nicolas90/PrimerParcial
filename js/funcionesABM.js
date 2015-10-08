function GuardarVoto()
{
		var provincia=$("#provincia").val();
		var localidad=$("#localidad").val();
		var direccion=$("#direccion").val();
		var candidato=$("#candidato").val();
		var sexo=$("#sexo").val();

		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarVoto",
			provincia:provincia,
			localidad:localidad,
			direccion:direccion,
			candidato:candidato,
			sexo:sexo	
		}
		});
		funcionAjax.done(function(retorno){
				Mostrar("MostrarLogin");
				$("#botonesABM").html("");
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
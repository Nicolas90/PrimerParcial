function GuardarVoto()
{
	/*
		var provincia=$("#provincia").val();
		var candidato=$("#candidato").val();
		var sexo=$("#sexo").val();
	*/
		var provincia = document.getElementById("provincia").value;
		var candidato = document.getElementById("candidato").value;
		var sexo = document.getElementById("sexo").value;

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
				Mostrar("MostrarVotos");
		});
		funcionAjax.fail(function(retorno){	
				Mostrar("MostrarVotos");
				//$("#contador").html(":(");	
		});

}

/*
function BorrarCD(idParametro)
{
	//alert(idParametro);
		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}

function EditarCD(idParametro)
{
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		var cd =JSON.parse(retorno);	
		$("#idCD").val(cd.id);
		$("#cantante").val(cd.cantante);
		$("#titulo").val(cd.titulo);
		$("#anio").val(cd.año);
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
	Mostrar("MostrarFormAlta");
}
*/
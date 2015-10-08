function validarLogin()
{
		var varUsuario=$("#dni").val();
		var recordar=$("#recordarme").is(':checked');
		
//$("#contador").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	

	var funcionAjax=$.ajax({
		url:"php/validarUsuario.php",
		type:"post",
		data:{
			recordarme:recordar,
			usuario:varUsuario,
		}
	});


	funcionAjax.done(function(retorno){
		//alert(retorno);
			if(retorno!="No-esta"){	
				MostrarBotones();
				MostrarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+retorno);
			}else
			{
				$("#contador").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#contador").html(retorno.responseText);	
	});
	
}


function deslogear()
{	
	var funcionAjax=$.ajax({
		url:"php/deslogearUsuario.php",
		type:"post"		
	});
	funcionAjax.done(function(retorno){
			MostrarBotones();
			MostrarLogin();
			$("#usuario").val("Sin usuario.");
			$("#BotonLogin").html("Login<br>-Sesión-");
			$("#BotonLogin").removeClass("btn-danger");
			$("#BotonLogin").addClass("btn-primary");
			
	});	
}
function MostrarBotones()
{		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarBotones"}
	});
	funcionAjax.done(function(retorno){
		$("#botonesABM").html(retorno);
		//$("#informe").html("Correcto BOTONES!!!");	
	});
}

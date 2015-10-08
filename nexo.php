<?php 
require_once("clases/AccesoDatos.php");
require_once("clases/voto.php");

$queHago=$_POST['queHacer'];

switch ($queHago) {
	case 'MostrarLogin':
			include("partes/formLogin.php");
		break;
	case 'MostrarBotones':
			include("partes/botonesVotacion.php");
		break;
	case 'MostrarVotoAlta':
			include("partes/formVotoAlta.php");
		break;
	case 'MostrarVotos':
			include("partes/formVotos.php");
		break;
	case 'GuardarVoto':
			session_start();

			echo $_SESSION['registrado'];
			
			/*
			$voto = new voto();
			$voto->dni=$_SESSION['registrado'];
			$voto->candidato=$_POST['candidato'];
			$voto->provincia=$_POST['provincia'];
			$voto->sexo=$_POST['sexo'];

			$voto->GuardarVoto();
			*/
			
			//$cantidad=$voto->GuardarVoto();

			//echo $cantidad;


			//session_start();

			//	$_SESSION['registrado']=null;

			//session_destroy();

		break;

	/*
		
	case 'BorrarCD':
			$cd = new cd();
			$cd->id=$_POST['id'];
			$cantidad=$cd->BorrarCd();
			echo $cantidad;

		break;
	case 'TraerCD':
			$cd = cd::TraerUnCd($_POST['id']);		
			echo json_encode($cd) ;

		break;	
	*/
	default:
		# code...
		break;
}

 ?>
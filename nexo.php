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

			$voto = new voto();
			$voto->dni=$_SESSION['registrado'];
			$voto->candidato=$_POST['candidato'];
			$voto->provincia=$_POST['provincia'];
			$voto->sexo=$_POST['sexo'];

			$voto->InsertarVoto();

			$_SESSION['registrado']=null;
			session_destroy();
		break;
	case 'BorrarVoto':
			$voto = new voto();
			$voto->id=$_POST['id'];
			$voto->BorrarVoto();
		break;
	case 'ModificarVoto':
		///////////////////////////////////////////////////////////////////////




		break;
	default:
		# code...
		break;
}

 ?>
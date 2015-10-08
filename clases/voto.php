<?php
class voto
{
	public $id;
 	public $dni;
  	public $candidato;
  	public $provincia;
  	public $sexo;

  	public static function TraerVotos()
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("select * from votos");
			$consulta->execute();			
			return $consulta->fetchAll(PDO::FETCH_CLASS, "voto");		
	}

  	public function InsertarVoto()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into votos (dni,provincia,candidato,sexo) values(:dni,:provincia,:candidato,:sexo)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarVoto( :dni, :provincia, :presidente, :sexo)");
		$consulta->bindValue(':dni',$this->dni, PDO::PARAM_INT);
		$consulta->bindValue(':provincia', $this->provincia, PDO::PARAM_STR);
		$consulta->bindValue(':candidato', $this->candidato, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $this->sexo, PDO::PARAM_STR);
		$consulta->execute();		
	}

  	public function BorrarVoto()
	 {
	 	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from votos WHERE id=:id");	
		$consulta->bindValue(':id',$this->id, PDO::PARAM_INT);		
		$consulta->execute();
	 }

	 public function ModificarVoto()
	 {
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("update votos set
			provincia=:provincia,
			candidato=:candidato,
			sexo=:sexo
			WHERE id=:id");
		$consulta->bindValue(':id',$this->id, PDO::PARAM_INT);
		$consulta->bindValue(':provincia',$this->titulo, PDO::PARAM_INT);
		$consulta->bindValue(':candidato', $this->año, PDO::PARAM_STR);
		$consulta->bindValue(':sexo', $this->cantante, PDO::PARAM_STR);
	 }
}
?>
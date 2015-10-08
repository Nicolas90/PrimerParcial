<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/ingreso.css" rel="stylesheet">

<?php 
session_start();
if(isset($_SESSION['registrado']))
  {  

    ?>
    <div class="container">

      <form class="form-ingreso" onsubmit="GuardarVoto();return false">
        <h2 class="form-ingreso-heading">VOTO</h2>

        <label for="provincia" class="sr-only">Provincia</label>
        <input type="text" id="provincia" name="provincia" title="Ingrese la provincia donde recide" class="form-control" placeholder="Provincia" required="" autofocus="">
        
        <label for="candidato" class="sr-only">Candidato</label>
        <select id="candidato" name="candidato" class="form-control">
          <option value="Scioli">Scioli</option>
          <option value="Macri">Macri</option>
          <option value="Masa">Masa</option>
        </select>
        
        <label for="sexo" class="sr-only">Sexo</label>
        <input type="radio" id="sexo" name="sexo"  value="Masculino" checked>Masculino
        <input type="radio" id="sexo" name="sexo"  value="Femenino">Femenino
       
        <button  class="btn btn-lg btn-success btn-block" type="submit"><span class="glyphicon glyphicon-floppy-save">&nbsp;&nbsp;</span>Guardar </button>
     
      </form>

    </div> <!-- /container -->
    <?php

}
else
  {    echo"<h3>usted no esta logeado</h3>";?>         
   
  <?php  
  }  

?>
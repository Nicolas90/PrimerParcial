<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/ingreso.css" rel="stylesheet">

 
<?php 
 
session_start();
if(!isset($_SESSION['registrado']))
  {  
    ?>
    <div id="formLogin" class="container">

      <form  class="form-ingreso " onsubmit="validarLogin();return false;">
        <h2 class="form-ingreso-heading">Ingrese sus datos</h2>
        <label for="dni" class="sr-only">DNI</label>
          <input type="text" id="dni" class="form-control" placeholder="DNI" required="" autofocus="" value="<?php  if(isset($_COOKIE["registro"])){echo $_COOKIE["registro"];}?>">
        
        <div class="checkbox">
          <label>
            <input type="checkbox" id="recordarme" checked> Recordame
          </label>
          
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
      <p>nicolas</p>
      </form>



    </div> <!-- /container -->

  <?php }
else
  {    
        echo"<h3>usted '".$_SESSION['registrado']."' esta logeado. </h3>";?>         
        <button onclick="deslogear()" class="btn btn-lg btn-danger btn-block" type="button"><span class="glyphicon glyphicon-off">&nbsp;</span>Deslogearme</button>
        <script type="text/javascript">
        MostrarBotones();</script>
    <?php  
  }  

?>
    
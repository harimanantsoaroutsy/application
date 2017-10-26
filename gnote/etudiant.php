<?php session_start() ;?>
<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8" /> 
	<title>Gestion des notes</title>
	<link  href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link  href="style/style.css" rel="stylesheet">
	</head>
	<body>
		<?php
			try{
			$bdd=new PDO('mysql:host=localhost;dbname=gnote','root','root');
			}
			catch(Exception $e)
			{
			die ('Erreur: '.$e->getMessage());
			}
			?>
	<div class="container" >
			<div class="row" >
                                
				<div class="col-lg-12" style="margin-top:3px;">
					<div class="navbar menu">
						<ul class="nav navbar-nav">
							<li class="active"> <a href="accueil.php" id="">Accueil</a></li>
							<li> <a href="etudiant.php" id="etudiant">Etudiant</a> </li>
							<li> <a href="matiere.php" id="matiere">Matiere</a> </li>
							<li> <a href="note.php" id="note">Note</a> </li>
							<li> <a href="audit_etudiant.php" id="audit_etudiant">Audit Etudiant</a> </li>
							<li> <a href="audit_matiere.php" id="audit_matiere">Audit Matiere</a> </li>
							<li> <a href="audit_note.php" id="audit_note">Audit Note</a> </li>
							<li> <a href="deconnexion.php" id="deconnexion">Déconnexion</a> </li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row-fluid corps" id="content">
			<div id="mondiv">  
				<form class="navbar-form pull-right">
				<button class="btn btn-success btn-sm bouton" id="btnajout">+</button>
				<input type="text" style="width: 150px" class="input-sm form-control" placeholder="Recherche">
				<button  type="submit" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-eye-open"></span> Chercher</button>
				</form>
			<table class="table table-bordered table-striped table-condensed" id="tabEtudiant">
					<thead>
					
						<tr>
							<th>NUMERO</th>
							<th>NOM</th>
							<th>MOYENNE</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
					   <?php 
					   $i=1;
					   $reponse=$bdd->query('SELECT * FROM etudiant');
					   while ($donnee=$reponse->fetch())
					   {
					   ?>
					   <tr>
							<td><?php echo $donnee['num_etudiant'];?></td>
							<td><?php echo $donnee['nom'];?></td>
							<td>
							<?php if( $donnee['moyenne']== NULL) echo "Aucune";
							else echo $donnee['moyenne'];?>
							</td>
							<td class="btn_td"><button class="btn btn-info btn-xs" id="btnupdate" name="<?php echo $i;?>"><span class="glyphicon glyphicon-pencil"></span></button>
							<button class="btn btn-danger btn-xs" id="btnsuppr" name="<?php echo $i;?>"><span class="" style="color:white;">X</span></button>
							</td>
						<?php
						$i++;
						}
						$reponse->closeCursor();
						?>
						</tr>						
					</tbody>
			</table>
			</div>		
			</div>

		</div>
		
						<div class="alert alert-success success" role="alert" style="text-align:center;display:none;position:absolute;top:0px;width:40%;margin-left:30%;margin-top:4%;z-index:1000000">
<span id="message_container" style="">message succes</span>
</div>
		<div class="modal fade" role="dialog" id="myModal" style="z-index:99999;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header menu">
                        </div>
                        <div class="modal-body">
                            
      <form class="form-horizontal col-lg-12" id="myForm">
		<div class="row">
		    <div class="form-group">    
	          <label for="text" class="col-lg-3 lab">Nom étudiant: </label> 
              <div class="col-lg-8">			  
              <input type="text" class="form-control"  style="height:35px;" name="nom" id="nom"> 
		      </div>
			</div>
			</div>
     </form>
                        </div>
               
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
			<div class="modal fade" role="dialog" id="myModal1" style="z-index:99999;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header menu">
                        </div>
                        <div class="modal-body">
                        </div>
               
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
	<script type="text/javascript" src="js/jquery-2.1.1.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="bootstrap/js/bootstrapValidator.min.js"></script>
    <script type="text/javascript" src="js/fonction.js"></script>
	</body>
	</html>
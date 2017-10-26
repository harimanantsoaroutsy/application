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
			<table class="table table-bordered table-striped table-condensed" id="tabMatiere">
					<thead>
						<tr>
							<th>ACTION</th>
							<th>DATE MISE A JOUR</th>
							<th>NUMERO ETUDIANT</th>
							<th>NOM ETUDIANT</th>
							<th>NUMERO MATIERE</th>
							<th>ANCIENNE NOTE</th>
							<th>NOUVELLE NOTE</th>
							<th>UTILISATEUR</th>
						</tr>
					</thead>
					<tbody>
					   <?php 
					   $reponse=$bdd->query('SELECT * FROM audit_note');
					   while ($donnee=$reponse->fetch())
					   {
					   ?>
					   <tr>
							<td><?php echo $donnee['action'];?></td>
							<td><?php echo $donnee['date_maj'];?></td>
							<td><?php echo $donnee['num_etudiant'];?></td>
							<td><?php echo $donnee['nom'];?></td>
							<td><?php echo $donnee['num_mat'];?></td>
							<td>
							<?php if( $donnee['note_ancien']== NULL) echo "Aucune";
							else echo $donnee['note_ancien'];?>
							</td>
							<td>
							<?php if( $donnee['note_nouv']== NULL) echo "Aucune";
							else echo $donnee['note_nouv'];?>
							</td>
							<td><?php echo $donnee['user'];?></td>
						<?php
						}
						$reponse->closeCursor();
						?>
						</tr>						
					</tbody>
			</table>
			</div>		
			</div>

		</div>
	</body>
	</html>
<?php session_start();
			try{
			$bdd=new PDO('mysql:host=localhost;dbname=gnote','root','root');
			}
			catch(Exception $e)
			{
			die ('Erreur: '.$e->getMessage());
			}
			

			if(isset($_POST["user"]) && isset($_POST["mdp"])){
			    $req = $bdd->prepare( ' SELECT * FROM utilisateur WHERE nom_user= :nom AND mdp=:mdp') ;
					$req->execute( array(
					'nom' => $_POST["user"],'mdp' => $_POST["mdp"]	)) ;
					if($req->fetch()){
			$_SESSION['nom'] = $_POST["user"];
					include("accueil.php");
			}
			else include("index.php");
			}
			/*------------------ETUDIANT-----------------------------*/
			if(isset($_POST["id"]) && isset($_POST['nom'])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' INSERT INTO etudiant(nom) VALUES(:nom )') ;
					$req->execute( array(
					'nom' => $_POST['nom'],	)) ;
			}
			if(isset($_POST["idModif"]) && isset($_POST['nom'])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' UPDATE etudiant set nom=:nom WHERE num_etudiant=:num') ;
					$req->execute( array(
					'nom' => $_POST['nom'],
					'num' => $_POST['numero'],)) ;
			}
			if(isset($_POST["idSuppr"])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' DELETE FROM etudiant WHERE num_etudiant=:num') ;
					$req->execute( array(
					'num' => $_POST['numero'],)) ;
			}
			
			/*------------------MATIERE-----------------------------*/
			if(isset($_POST["idAjoutM"]) && isset($_POST['nom']) && isset($_POST['coef'])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' INSERT INTO matiere(design,coef) VALUES(:nom,:coef )') ;
					$req->execute( array(
					'nom' => $_POST['nom'],
					'coef' => $_POST['coef'],)) ;
			}
			if(isset($_POST["idModifM"]) && isset($_POST['nom']) && isset($_POST['coef'])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' UPDATE matiere set design=:nom,coef=:coef WHERE num_mat=:num') ;
					$req->execute( array(
					'nom' => $_POST['nom'],
					'coef' => $_POST['coef'],
					'num' => $_POST['numero'],)) ;
			}
			if(isset($_POST["idSupprM"])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' DELETE FROM matiere WHERE num_mat=:num') ;
					$req->execute( array(
					'num' => $_POST['numero'],)) ;
			}
			
			/*-----------------------------NOTE----------------------------------*/
					if(isset($_GET["num"])){
					$req = $bdd->prepare( ' SELECT * FROM note join matiere on note.num_mat= matiere.num_mat WHERE num_etudiant= :num') ;
					$req->execute( array(
					'num' => $_GET['num'],	)) ;
					   $i=1;
					   ?>
				<form class="navbar-form pull-right">
				<button class="btn btn-success btn-sm bouton" id="btnajout">+</button>
				<input type="text" style="width: 150px" class="input-sm form-control" placeholder="Recherche">
				<button  type="submit" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-eye-open"></span> Chercher</button>
				</form>
				 <table class="table table-bordered table-striped table-condensed" id="tabMatiere">
					<thead>
						<tr>
							<th>NUMERO MATIERE</th>
							<th>MATIERE</th>
							<th>COEFFICIENT</th>
							<th>NOTE</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>	
<?php					
					   while ($donnee=$req->fetch())
					   {
					   ?>
					   <tr>
							<td><?php echo $donnee['num_mat'];?></td>
							<td><?php echo $donnee['design'];?></td>
							<td><?php echo $donnee['coef'];?></td>
							<td><?php echo $donnee['note'];?></td>
							<td class="btn_td"><button class="btn btn-info btn-xs" id="btnupdate" name="<?php echo $i;?>"><span class="glyphicon glyphicon-pencil"></span></button>
							<button class="btn btn-danger btn-xs" id="btnsuppr" name="<?php echo $i;?>"><span class="" style="color:white;">X</span></button>
							</td>
						</tr>	
						<?php
						$i++;
						}
						?>
						</tbody>
						</table>
						<?php
						$req->closeCursor();
						}
						
	if(isset($_POST["idAJNote"]) && isset($_POST['matiere']) && isset($_POST['note'])) {
				$nummat= $_POST['matiere'];
				$numet= $_POST['num'];
				$note= $_POST['note'];
					$req1 = $bdd->prepare( ' SELECT * FROM note WHERE num_mat=:num_mat AND num_etudiant=:numet') ;
					$req1->execute( array(
					'num_mat' => $nummat,
					'numet' => $numet)) ;
				 if ($req1->fetch()==false){
				  $req2 = $bdd->prepare( ' SELECT coef FROM matiere WHERE num_mat=:num_mat') ;
					$req2->execute( array(
					'num_mat' => $_POST['matiere'])) ;
				if ($donnee2=$req2->fetch()) $coef = $donnee2['coef'];
				$notemax= $coef*20;
				 if($note<=$notemax){
				 $username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
					$req = $bdd ->prepare( ' INSERT INTO note(num_etudiant,num_mat,note) VALUES(:etudiant,:matiere,:note )') ;
					$req->execute( array(
					'etudiant' => $_POST['num'],
					'matiere' => $_POST['matiere'],	
					'note' => $_POST['note'])) ;
					echo "Ajout effectué";
					}
					else echo "Note invalide";
					}
				else echo "Note déjà insérée";
			}
			
				if(isset($_POST["idModifNote"]) && isset($_POST['note'])) {
				$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' UPDATE note set note=:note WHERE num_mat=:num_mat AND num_etudiant=:num_etudiant') ;
					$req->execute( array(
					'note' => $_POST['note'],
					'num_mat' => $_POST['matiere'],
					'num_etudiant' => $_POST['num'],)) ;
			}
			if(isset($_POST["idSupprNote"])) {
			$username= $bdd->prepare( 'SET @username=:name') ;
			$username->execute( array('name' => $_SESSION['nom'],)) ;
			   $req = $bdd->prepare( ' DELETE FROM note WHERE num_mat=:num_mat AND num_etudiant=:num_etudiant') ;
					$req->execute( array(
					'num_mat' => $_POST['matiere'],'num_etudiant' => $_POST['num'])) ;
			}
			
						?>
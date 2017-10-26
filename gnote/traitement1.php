<?php
			try{
			$bdd=new PDO('mysql:host=localhost;dbname=gnote','root','root');
			}
			catch(Exception $e)
			{
			die ('Erreur: '.$e->getMessage());
			}
if(isset($_POST["idAJNote"]) && isset($_POST['matiere']) && isset($_POST['note'])) {
			   $req = $bdd->prepare( ' INSERT INTO note(num_etudiant,num_mat,note) VALUES(:etudiant,:matiere,:note )') ;
					$req->execute( array(
					'etudiant' => $_POST['num'],
					'matiere' => $_POST['matiere'],	
					'note' => $_POST['note'])) ;
			}
			?>
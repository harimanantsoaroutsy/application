<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="style/style.css"> 
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" /> 
</head>

<body>

<div class="container-fluid corps1">
		<div class="col-lg-6 ">
			<div class="col-lg-12 gnote">
				<img src="image/img.jpeg"/>
			</div>
		</div>

		<div class="col-lg-6">
			<form class="col-lg-6 forme-component" action="traitement.php" method="post">
				 <input type="text" class="form-control forme" placeholder="nom d'utilisateur" name="user"/>
				 <input type="password" class="form-control forme" placeholder="mot de passe" name="mdp"/>
				 <button class="forme btn btn1">Login</button>
			</form>
		</div>
</div>
</body>
</html>
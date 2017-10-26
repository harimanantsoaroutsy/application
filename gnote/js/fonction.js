$(document).ready(function()
{
$('#myForm').bootstrapValidator({
	// To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
	feedbackIcons : {
		valid : 'glyphicon glyphicon-ok',
		invalid : 'glyphicon glyphicon-remove',
		validating : 'glyphicon glyphicon-refresh'
	},
	/* excluded:':not(:visible)', */
	onError: function(e) {},
	onSuccess: function(e) {
		
	},
	fields : {
	'nom':{
		
		validators : {
			notEmpty : {
				message : 'champ obligatoire'
			}
		}	
}
}
});

$("html").on("click","#btnajout",function(e){
   e.preventDefault();
 $('#myModal').modal('show');
  $('#myModal .modal-header').html('<h4 style="text-align:center;color:white">NOUVEL ETUDIANT</h4>');
  $('#myModal .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="ajout">Ajouter</button><button class="btn btn-primary push annulation" style="height:35px">Annuler</button>');
  $("#nom").val("");

});

$("html").on('click',"#ajout",function(e){
   e.preventDefault();
   $('#myForm').data('bootstrapValidator').validate();
    $('#myForm').bootstrapValidator("revalidateField","nom");
    var form_valid = $('#myForm').data('bootstrapValidator').isValid();
    if(form_valid){
   nom= $("#nom").val();
   id = "ajoutE";
      $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'nom':nom,
   'id': id
   },
   dataType: 'html',
   success: function() {   
      $('#myModal').modal('hide');
	$('#content').load('etudiant.php #mondiv');
	InfoMessage("Ajout effectué");
    },           
   error: function() {
  // alert('La requête n\'a pas abouti'); 
 } 
   });
}});

$("html").on("click","#btnupdate",function(e){
   e.preventDefault();
 $('#myModal').modal('show');
  $('#myModal .modal-header').html('<h4 style="text-align:center;color:white">MODIFICATION ETUDIANT</h4><input type="hidden" id="num" />');
  $('#myModal .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="update">Modifier</button><button class="btn btn-primary push annulation" style="height:35px">Annuler</button>');
	numLigne= $(this).attr('name');
   numero= $("#tabEtudiant").find('tr').eq(numLigne).find('td').eq(0).text();
   nom= $("#tabEtudiant").find('tr').eq(numLigne).find('td').eq(1).text();
 $("#nom").val(nom);
 $("#num").val(numero);

  });
  
  $("html").on('click',"#update",function(e){
   e.preventDefault();
    $('#myForm').data('bootstrapValidator').validate();
	    $('#myForm').bootstrapValidator("revalidateField","nom");
    var form_valid = $('#myForm').data('bootstrapValidator').isValid();
    if(form_valid){
   numero= $("#num").val();
   nom= $("#nom").val();
   id = "modifE";
         $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'nom':nom,
   'numero': numero,
   'idModif': id
   },
   dataType: 'html',
   success: function() {   
      $('#myModal').modal('hide');
	$('#content').load('etudiant.php #mondiv');
	InfoMessage("Modification effectuée");
    },           
   error: function() {
   alert('La requête n\'a pas abouti'); 
 } 
   });
}});

$("html").on("click","#btnsuppr",function(e){
   e.preventDefault();
   $('#myModal1').modal('show');
  $('#myModal1 .modal-header').html('<h4 style="text-align:center;color:white">Voulez-vous vraiment supprimer cet étudiant?</h4>');
  $('#myModal1 .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="delete">OUI</button><button class="btn btn-primary" style="height:35px" id="annulation1">NON</button>');
	numLigne= $(this).attr('name');
   numero= $("#tabEtudiant").find('tr').eq(numLigne).find('td').eq(0).text();
     $("html").on('click',"#delete",function(e){
   e.preventDefault();
   id = "supprE";
         $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'numero': numero,
   'idSuppr': id
   },
   dataType: 'html',
   success: function() {   
    $('#myModal1').modal('hide');
	$('#content').load('etudiant.php #mondiv');
	InfoMessage("Suppression effectuée");
    },           
   error: function() {
   alert('La requête n\'a pas abouti'); 
 } 
   });
});
  });
  
  $("html").on("click",".annulation",function(e){
   e.preventDefault();
   $('#myModal').modal('hide');
  });
    $("html").on("click","#annulation1",function(e){
   e.preventDefault();
   $('#myModal1').modal('hide');
  });
  
   //message info
    function InfoMessage(message){
    	var elem = $('.success');
        elem.show();
        elem.children("span").text(message);
        elem.fadeOut(8000);
    }
});
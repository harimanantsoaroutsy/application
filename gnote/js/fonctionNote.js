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
	'matiere':{
		
		validators : {
			notEmpty : {
				message : 'champ obligatoire'
			}
		}	
},
'note':{
		
		validators : {
		numeric : {
			message : 'Veuillez saisir un nombre'
		 },
			notEmpty : {
				message : 'champ obligatoire'
			}
		}	
}
}
});

$('#num').change(function() {
num=$("#num").val();   
param='num='+num;
	$('#mondiv').load('traitement.php',param);
  return;
   });
   
   $("html").on("click","#btnajout",function(e){
   e.preventDefault();
 $('#myModal').modal('show');
  $('#myModal .modal-header').html('<h4 style="text-align:center;color:white">NOUVELLE NOTE</h4>');
  $('#myModal .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="ajout">Ajouter</button><button class="btn btn-primary push" style="height:35px" id="annulation">Annuler</button>');
 $("#myModal #matiere").val("");
 $("#myModal #note").val("");
 $("#myModal #matiere").removeAttr('disabled','disabled');

});
 $("html").on('click',"#ajout",function(e){
   e.preventDefault();
    $('#myForm').data('bootstrapValidator').validate();
		    $('#myForm').bootstrapValidator("revalidateField","matiere");
	    $('#myForm').bootstrapValidator("revalidateField","note");

    var form_valid = $('#myForm').data('bootstrapValidator').isValid();
    if(form_valid){
   matiere= $("#myModal #matiere").val();
   note=$("#myModal #note").val();
   id = "ajoutN";
      $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'matiere':matiere,
   'note':note,
   'num':num,
   'idAJNote': id
   },
   dataType: 'text',
   success: function(data) {
  if(data==="Ajout effectué"){   
      $('#myModal').modal('hide');
	param='num='+num;
	$('#mondiv').load('traitement.php',param);
		InfoMessage(data);
		return;
		}
		else if(data==="Note déjà insérée"){
		ErrorMessage("Impossible d'ajouter: "+data);
		  $('#myModal').modal('hide');
		  return;
		}
		else if(data==="Note invalide"){
		ErrorMessage(data);
		  $('#myModal').modal('hide');
		  return;
		}

    },           
   error: function() {
  //alert('La requête n\'a pas abouti'); 
 } 
   });
}});

$("html").on("click","#btnupdate",function(e){
   e.preventDefault();
 $('#myModal').modal('show');
  $('#myModal .modal-header').html('<h4 style="text-align:center;color:white">MODIFICATION NOTE</h4>');
  $('#myModal .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="update">Modifier</button><button class="btn btn-primary push" style="height:35px" id="annulation">Annuler</button>');
	numLigne= $(this).attr('name');
   matiere= $("#tabMatiere").find('tr').eq(numLigne).find('td').eq(0).text();
   note= $("#tabMatiere").find('tr').eq(numLigne).find('td').eq(3).text();
 $("#myModal #matiere").val(matiere);
 $("#myModal #note").val(note);
 $("#myModal #matiere").attr('disabled','disabled');
 
   $("html").on('click',"#update",function(e){
   e.preventDefault();
    $('#myForm').data('bootstrapValidator').validate();
	    $('#myForm').bootstrapValidator("revalidateField","note");
    var form_valid = $('#myForm').data('bootstrapValidator').isValid();
    if(form_valid){
   matiere= $("#myModal #matiere").val();
   note= $("#myModal #note").val();
   id = "modifN";
         $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'matiere':matiere,
   'note': note,
   'num':num,
   'idModifNote': id
   },
   dataType: 'html',
   success: function() {   
      $('#myModal').modal('hide');
	param='num='+num;
	$('#mondiv').load('traitement.php',param);
	InfoMessage("Modification effectuée");
	return;
    },           
   error: function() {
   alert('La requête n\'a pas abouti'); 
 } 
   });
}});
  });
  
  
  $("html").on("click","#btnsuppr",function(e){
   e.preventDefault();
   $('#myModal1').modal('show');
  $('#myModal1 .modal-header').html('<h4 style="text-align:center;color:white">Voulez-vous vraiment supprimer cette note?</h4>');
  $('#myModal1 .modal-footer').html('<button class="btn btn-primary" style="height:35px" id="delete">OUI</button><button class="btn btn-primary" style="height:35px" id="annulation1">NON</button>');

	numLigne= $(this).attr('name');
   matiere= $("#tabMatiere").find('tr').eq(numLigne).find('td').eq(0).text();
   
     $("html").on('click',"#delete",function(e){
   e.preventDefault();
   id = "supprNote";
         $.ajax({   
   url: 'traitement.php',     
   type: 'POST',       
   data:{
   'num': num,
   'matiere':matiere,
   'idSupprNote': id
   },
   dataType: 'html',
   success: function() {   
    $('#myModal1').modal('hide');
	param='num='+num;
	$('#mondiv').load('traitement.php',param);
	InfoMessage("Suppression effectuée");
	return;
    },           
   error: function() {
   alert('La requête n\'a pas abouti'); 
 } 
   });
});
  });
  
  $("html").on("click","#annulation",function(e){
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
	   //error message
    function ErrorMessage(message){
    	var elem = $('.danger');
        elem.show();
        elem.children("span").text(message);
        elem.fadeOut(4000);
    }
});
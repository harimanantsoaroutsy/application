
function validateclient(){
	$('#form_client').data('bootstrapValidator').validate();
}
function demande_ready(){
$("#emprunt_deb_contrat").on("change",function(){
	$('#form_client').bootstrapValidator('revalidateField', 'emprunt_deb_contrat');
});
$("#emprunt_nais").on("change",function(){
	$('#form_client').bootstrapValidator('revalidateField', 'emprunt_nais');
});
$("#emprunt_fin_contrat").on("change",function(){
	$('#form_client').bootstrapValidator('revalidateField', 'emprunt_fin_contrat');
});
$("#dt_domiciliation_revenus").on("change",function(){
	$('#form_client').bootstrapValidator('revalidateField', 'emprunt_dom_revenus');
});
$('#form_client').bootstrapValidator({
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
			emprunt_deb_contrat:{
				validators : {
                    notEmpty : {
                        message : 'Veuillez entrer  la date de début du prêt'
                    },
					callback : {
						callback : function(value, validator){
							
							 $('#form_client').bootstrapValidator('revalidateField', 'emprunt_fin_contrat');
							return true
						}
					}

                }
			},
			emprunt_fin_contrat:{
				validators : {
                    notEmpty : {
                        message : 'Veuillez entrer la date de fin du prêt'
                    },
					callback : {
						callback : function(value, validator){
							var date_eng_fin=value.split("/");
							var date_fin = new Date(date_eng_fin[2],date_eng_fin[1],date_eng_fin[0]);
							var debut = $("#emprunt_deb_contrat").val();
							var debut_eng = debut.split("/");
							var date_debut = new Date(debut_eng[2],debut_eng[1],debut_eng[0]);
							if(date_fin.getTime()<date_debut.getTime()){
								return {
									valid: false,
									message: 'La date de fin du prêt doit être superieur au date de début du prêt'
								};
							}
							return true
						}
					}

                }
			},
			emprunt_nais:{
				validators : {
                    notEmpty : {
                        message : 'Veuillez entrer la date de naissance'
                    }

                }
			},
			emprunt_dom_revenus:{
				validators : {
                    notEmpty : {
                        message : 'La date de domiciliation revenus est obligatoire'
                    }

                }
			},
			emprunt_salaire:{
				validators : {
                    notEmpty : {
                        message : 'Veuillez entrer la salaire  net'
                    },
					numeric : {
							message : 'veuillez entrer une valeur numérique'
					}

                }
			}
			
		}
});
/*revenu et charge */


}

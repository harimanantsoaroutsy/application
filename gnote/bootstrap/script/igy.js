/* Scroll to Top */

/* connection */


$(".totop").hide();
var timeout;
/* Pour autocomplete avec des caractères spéciaux*/
var accentMap = { "-" : " ", "ẚ": "a", "Á": "a", "á": "a", "À": "a", "à": "a", "Ă": "a", "ă": "a", "Ắ": "a", "ắ": "a", "Ằ": "a", "ằ": "a", "Ẵ": "a", "ẵ": "a", "Ẳ": "a", "ẳ": "a", "Â": "a", "â": "a", "Ấ": "a", "ấ": "a", "Ầ": "a", "ầ": "a", "Ẫ": "a", "ẫ": "a", "Ẩ": "a", "ẩ": "a", "Ǎ": "a", "ǎ": "a", "Å": "a", "å": "a", "Ǻ": "a", "ǻ": "a", "Ä": "a", "ä": "a", "Ǟ": "a", "ǟ": "a", "Ã": "a", "ã": "a", "Ȧ": "a", "ȧ": "a", "Ǡ": "a", "ǡ": "a", "Ą": "a", "ą": "a", "Ā": "a", "ā": "a", "Ả": "a", "ả": "a", "Ȁ": "a", "ȁ": "a", "Ȃ": "a", "ȃ": "a", "Ạ": "a", "ạ": "a", "Ặ": "a", "ặ": "a", "Ậ": "a", "ậ": "a", "Ḁ": "a", "ḁ": "a", "Ⱥ": "a", "ⱥ": "a", "Ǽ": "a", "ǽ": "a", "Ǣ": "a", "ǣ": "a", "Ḃ": "b", "ḃ": "b", "Ḅ": "b", "ḅ": "b", "Ḇ": "b", "ḇ": "b", "Ƀ": "b", "ƀ": "b", "ᵬ": "b", "Ɓ": "b", "ɓ": "b", "Ƃ": "b", "ƃ": "b", "Ć": "c", "ć": "c", "Ĉ": "c", "ĉ": "c", "Č": "c", "č": "c", "Ċ": "c", "ċ": "c", "Ç": "c", "ç": "c", "Ḉ": "c", "ḉ": "c", "Ȼ": "c", "ȼ": "c", "Ƈ": "c", "ƈ": "c", "ɕ": "c", "Ď": "d", "ď": "d", "Ḋ": "d", "ḋ": "d", "Ḑ": "d", "ḑ": "d", "Ḍ": "d", "ḍ": "d", "Ḓ": "d", "ḓ": "d", "Ḏ": "d", "ḏ": "d", "Đ": "d", "đ": "d", "ᵭ": "d", "Ɖ": "d", "ɖ": "d", "Ɗ": "d", "ɗ": "d", "Ƌ": "d", "ƌ": "d", "ȡ": "d", "ð": "d", "É": "e", "Ə": "e", "Ǝ": "e", "ǝ": "e", "é": "e", "È": "e", "è": "e", "Ĕ": "e", "ĕ": "e", "Ê": "e", "ê": "e", "Ế": "e", "ế": "e", "Ề": "e", "ề": "e", "Ễ": "e", "ễ": "e", "Ể": "e", "ể": "e", "Ě": "e", "ě": "e", "Ë": "e", "ë": "e", "Ẽ": "e", "ẽ": "e", "Ė": "e", "ė": "e", "Ȩ": "e", "ȩ": "e", "Ḝ": "e", "ḝ": "e", "Ę": "e", "ę": "e", "Ē": "e", "ē": "e", "Ḗ": "e", "ḗ": "e", "Ḕ": "e", "ḕ": "e", "Ẻ": "e", "ẻ": "e", "Ȅ": "e", "ȅ": "e", "Ȇ": "e", "ȇ": "e", "Ẹ": "e", "ẹ": "e", "Ệ": "e", "ệ": "e", "Ḙ": "e", "ḙ": "e", "Ḛ": "e", "ḛ": "e", "Ɇ": "e", "ɇ": "e", "ɚ": "e", "ɝ": "e", "Ḟ": "f", "ḟ": "f", "ᵮ": "f", "Ƒ": "f", "ƒ": "f", "Ǵ": "g", "ǵ": "g", "Ğ": "g", "ğ": "g", "Ĝ": "g", "ĝ": "g", "Ǧ": "g", "ǧ": "g", "Ġ": "g", "ġ": "g", "Ģ": "g", "ģ": "g", "Ḡ": "g", "ḡ": "g", "Ǥ": "g", "ǥ": "g", "Ɠ": "g", "ɠ": "g", "Ĥ": "h", "ĥ": "h", "Ȟ": "h", "ȟ": "h", "Ḧ": "h", "ḧ": "h", "Ḣ": "h", "ḣ": "h", "Ḩ": "h", "ḩ": "h", "Ḥ": "h", "ḥ": "h", "Ḫ": "h", "ḫ": "h", H: "h", "̱": "h", "ẖ": "h", "Ħ": "h", "ħ": "h", "Ⱨ": "h", "ⱨ": "h", "Í": "i", "í": "i", "Ì": "i", "ì": "i", "Ĭ": "i", "ĭ": "i", "Î": "i", "î": "i", "Ǐ": "i", "ǐ": "i", "Ï": "i", "ï": "i", "Ḯ": "i", "ḯ": "i", "Ĩ": "i", "ĩ": "i", "İ": "i", i: "i", "Į": "i", "ı": "i", "į": "i", "Ī": "i", "ī": "i", "Ỉ": "i", "ỉ": "i", "Ȉ": "i", "ȉ": "i", "Ȋ": "i", "ȋ": "i", "Ị": "i", "ị": "i", "Ḭ": "i", "ḭ": "i", I: "i", "ı": "i", "Ɨ": "i", "ɨ": "i", "Ĵ": "j", "ĵ": "j", J: "j", "̌": "j", "ǰ": "j", "ȷ": "j", "Ɉ": "j", "ɉ": "j", "ʝ": "j", "ɟ": "j", "ʄ": "j", "Ḱ": "k", "ḱ": "k", "Ǩ": "k", "ǩ": "k", "Ķ": "k", "ķ": "k", "Ḳ": "k", "ḳ": "k", "Ḵ": "k", "ḵ": "k", "Ƙ": "k", "ƙ": "k", "Ⱪ": "k", "ⱪ": "k", "Ĺ": "a", "ĺ": "l", "Ľ": "l", "ľ": "l", "Ļ": "l", "ļ": "l", "Ḷ": "l", "ḷ": "l", "Ḹ": "l", "ḹ": "l", "Ḽ": "l", "ḽ": "l", "Ḻ": "l", "ḻ": "l", "Ł": "l", "ł": "l", "Ł": "l", "̣": "l", "ł": "l", "̣": "l", "Ŀ": "l", "ŀ": "l", "Ƚ": "l", "ƚ": "l", "Ⱡ": "l", "ⱡ": "l", "Ɫ": "l", "ɫ": "l", "ɬ": "l", "ɭ": "l", "ȴ": "l", "Ḿ": "m", "ḿ": "m", "Ṁ": "m", "ṁ": "m", "Ṃ": "m", "ṃ": "m", "ɱ": "m", "Ń": "n", "ń": "n", "Ǹ": "n", "ǹ": "n", "Ň": "n", "ň": "n", "Ñ": "n", "ñ": "n", "Ṅ": "n", "ṅ": "n", "Ņ": "n", "ņ": "n", "Ṇ": "n", "ṇ": "n", "Ṋ": "n", "ṋ": "n", "Ṉ": "n", "ṉ": "n", "Ɲ": "n", "ɲ": "n", "Ƞ": "n", "ƞ": "n", "ɳ": "n", "ȵ": "n", N: "n", "̈": "n", n: "n", "̈": "n", "Ó": "o", "ó": "o", "Ò": "o", "ò": "o", "Ŏ": "o", "ŏ": "o", "Ô": "o", "ô": "o", "Ố": "o", "ố": "o", "Ồ": "o", "ồ": "o", "Ỗ": "o", "ỗ": "o", "Ổ": "o", "ổ": "o", "Ǒ": "o", "ǒ": "o", "Ö": "o", "ö": "o", "Ȫ": "o", "ȫ": "o", "Ő": "o", "ő": "o", "Õ": "o", "õ": "o", "Ṍ": "o", "ṍ": "o", "Ṏ": "o", "ṏ": "o", "Ȭ": "o", "ȭ": "o", "Ȯ": "o", "ȯ": "o", "Ȱ": "o", "ȱ": "o", "Ø": "o", "ø": "o", "Ǿ": "o", "ǿ": "o", "Ǫ": "o", "ǫ": "o", "Ǭ": "o", "ǭ": "o", "Ō": "o", "ō": "o", "Ṓ": "o", "ṓ": "o", "Ṑ": "o", "ṑ": "o", "Ỏ": "o", "ỏ": "o", "Ȍ": "o", "ȍ": "o", "Ȏ": "o", "ȏ": "o", "Ơ": "o", "ơ": "o", "Ớ": "o", "ớ": "o", "Ờ": "o", "ờ": "o", "Ỡ": "o", "ỡ": "o", "Ở": "o", "ở": "o", "Ợ": "o", "ợ": "o", "Ọ": "o", "ọ": "o", "Ộ": "o", "ộ": "o", "Ɵ": "o", "ɵ": "o", "Ṕ": "p", "ṕ": "p", "Ṗ": "p", "ṗ": "p", "Ᵽ": "p", "Ƥ": "p", "ƥ": "p", P: "p", "̃": "p", p: "p", "̃": "p", "ʠ": "q", "Ɋ": "q", "ɋ": "q", "Ŕ": "r", "ŕ": "r", "Ř": "r", "ř": "r", "Ṙ": "r", "ṙ": "r", "Ŗ": "r", "ŗ": "r", "Ȑ": "r", "ȑ": "r", "Ȓ": "r", "ȓ": "r", "Ṛ": "r", "ṛ": "r", "Ṝ": "r", "ṝ": "r", "Ṟ": "r", "ṟ": "r", "Ɍ": "r", "ɍ": "r", "ᵲ": "r", "ɼ": "r", "Ɽ": "r", "ɽ": "r", "ɾ": "r", "ᵳ": "r", "ß": "s", "Ś": "s", "ś": "s", "Ṥ": "s", "ṥ": "s", "Ŝ": "s", "ŝ": "s", "Š": "s", "š": "s", "Ṧ": "s", "ṧ": "s", "Ṡ": "s", "ṡ": "s", "ẛ": "s", "Ş": "s", "ş": "s", "Ṣ": "s", "ṣ": "s", "Ṩ": "s", "ṩ": "s", "Ș": "s", "ș": "s", "ʂ": "s", S: "s", "̩": "s", s: "s", "̩": "s", "Þ": "t", "þ": "t", "Ť": "t", "ť": "t", T: "t", "̈": "t", "ẗ": "t", "Ṫ": "t", "ṫ": "t", "Ţ": "t", "ţ": "t", "Ṭ": "t", "ṭ": "t", "Ț": "t", "ț": "t", "Ṱ": "t", "ṱ": "t", "Ṯ": "t", "ṯ": "t", "Ŧ": "t", "ŧ": "t", "Ⱦ": "t", "ⱦ": "t", "ᵵ": "t", "ƫ": "t", "Ƭ": "t", "ƭ": "t", "Ʈ": "t", "ʈ": "t", "ȶ": "t", "Ú": "u", "ú": "u", "Ù": "u", "ù": "u", "Ŭ": "u", "ŭ": "u", "Û": "u", "û": "u", "Ǔ": "u", "ǔ": "u", "Ů": "u", "ů": "u", "Ü": "u", "ü": "u", "Ǘ": "u", "ǘ": "u", "Ǜ": "u", "ǜ": "u", "Ǚ": "u", "ǚ": "u", "Ǖ": "u", "ǖ": "u", "Ű": "u", "ű": "u", "Ũ": "u", "ũ": "u", "Ṹ": "u", "ṹ": "u", "Ų": "u", "ų": "u", "Ū": "u", "ū": "u", "Ṻ": "u", "ṻ": "u", "Ủ": "u", "ủ": "u", "Ȕ": "u", "ȕ": "u", "Ȗ": "u", "ȗ": "u", "Ư": "u", "ư": "u", "Ứ": "u", "ứ": "u", "Ừ": "u", "ừ": "u", "Ữ": "u", "ữ": "u", "Ử": "u", "ử": "u", "Ự": "u", "ự": "u", "Ụ": "u", "ụ": "u", "Ṳ": "u", "ṳ": "u", "Ṷ": "u", "ṷ": "u", "Ṵ": "u", "ṵ": "u", "Ʉ": "u", "ʉ": "u", "Ṽ": "v", "ṽ": "v", "Ṿ": "v", "ṿ": "v", "Ʋ": "v", "ʋ": "v", "Ẃ": "w", "ẃ": "w", "Ẁ": "w", "ẁ": "w", "Ŵ": "w", "ŵ": "w", W: "w", "̊": "w", "ẘ": "w", "Ẅ": "w", "ẅ": "w", "Ẇ": "w", "ẇ": "w", "Ẉ": "w", "ẉ": "w", "Ẍ": "x", "ẍ": "x", "Ẋ": "x", "ẋ": "x", "Ý": "y", "ý": "y", "Ỳ": "y", "ỳ": "y", "Ŷ": "y", "ŷ": "y", Y: "y", "̊": "y", "ẙ": "y", "Ÿ": "y", "ÿ": "y", "Ỹ": "y", "ỹ": "y", "Ẏ": "y", "ẏ": "y", "Ȳ": "y", "ȳ": "y", "Ỷ": "y", "ỷ": "y", "Ỵ": "y", "ỵ": "y", "ʏ": "y", "Ɏ": "y", "ɏ": "y", "Ƴ": "y", "ƴ": "y", "Ź": "z", "ź": "z", "Ẑ": "z", "ẑ": "z", "Ž": "z", "ž": "z", "Ż": "z", "ż": "z", "Ẓ": "z", "ẓ": "z", "Ẕ": "z", "ẕ": "z", "Ƶ": "z", "ƶ": "z", "Ȥ": "z", "ȥ": "z", "ʐ": "z", "ʑ": "z", "Ⱬ": "z", "ⱬ": "z", "Ǯ": "z", "ǯ": "z", "ƺ": "z", "２": "2", "６": "6", "Ｂ": "B", "Ｆ": "F", "Ｊ": "J", "Ｎ": "N", "Ｒ": "R", "Ｖ": "V", "Ｚ": "Z", "ｂ": "b", "ｆ": "f", "ｊ": "j", "ｎ": "n", "ｒ": "r", "ｖ": "v", "ｚ": "z", "１": "1", "５": "5", "９": "9", "Ａ": "A", "Ｅ": "E", "Ｉ": "I", "Ｍ": "M", "Ｑ": "Q", "Ｕ": "U", "Ｙ": "Y", "ａ": "a", "ｅ": "e", "ｉ": "i", "ｍ": "m", "ｑ": "q", "ｕ": "u", "ｙ": "y", "０": "0", "４": "4", "８": "8", "Ｄ": "D", "Ｈ": "H", "Ｌ": "L", "Ｐ": "P", "Ｔ": "T", "Ｘ": "X", "ｄ": "d", "ｈ": "h", "ｌ": "l", "ｐ": "p", "ｔ": "t", "ｘ": "x", "３": "3", "７": "7", "Ｃ": "C", "Ｇ": "G", "Ｋ": "K", "Ｏ": "O", "Ｓ": "S", "Ｗ": "W", "ｃ": "c", "ｇ": "g", "ｋ": "k", "ｏ": "o", "ｓ": "s", "ｗ": "w" }
var normalize = function( term ) {
	var ret = "";
	for ( var i = 0; i < term.length; i++ ) {
	ret += accentMap[ term.charAt(i) ] || term.charAt(i);
	}
	return ret;
};

$(function() {
	bootbox.setDefaults({
		locale: "fr"
	});	
	
	InfoMessage.init({
        "selector": ".bb-alert"
    });
	
	ErrorMessage.init({
        "selector": ".err-msg"
    });
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.totop').slideDown();
		} else {
			$('.totop').slideUp();
		}
	});

	$('.totop a').click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop : 0
		}, 500);
	});
	
	// Bootstrap select
	selectpicker = $('.selectpicker').selectpicker({
        'selectedText': 'cat',
        'noneSelectedText': ''
    });
	
	
	$('.date').datepicker({
		format: "dd/mm/yyyy",
	//	 minViewMode: 1,
		 language: "fr"
	});
	$('.time').timepicker({
		minuteStep: 5,
        showInputs: false,
        disableFocus: true,
        showMeridian:false,
        defaultTime:false,
        template:false
	});
	// Popover pour les tooltips de bootstrap
	init_popover();
});
// mampionona //

function get_titre_avis(id_score){
	var base_url = $("#base_url").val();
	var url = base_url+"avis_decision/avis_decision/titre_by_connecte";
	var data = {id_score:id_score};
	var text = "";
	$.ajax({
				url: url,
				data : data,
				type: 'POST',
				success: function(response){
					
					text = response;
						
				},
				async: false
	});
	
	return text;
}
function append_score(id_pret,id_score){
	switch(id_score){
		case '95':
			var score = "VERT";
			$('.score_pret_append').removeClass('score_noir');
			$('.score_pret_append').removeClass('score_vert');
			$('.score_pret_append').removeClass('score_orange');
			$('.score_pret_append').removeClass('score_rouge');
			$('.score_pret_append').addClass('score_vert');
			$('.score_pret_append').val(score);
			
		break;
		case '94':
			var score =" ROUGE";
			var gar = get_garantie(id_pret,id_score);
			var is_gar = "SG";
			if(gar==1){
				is_gar = "AG";
			}
			var val = score +" " +is_gar;
			$('.score_pret_append').removeClass('score_noir');
			$('.score_pret_append').removeClass('score_vert');
			$('.score_pret_append').removeClass('score_orange');
			$('.score_pret_append').removeClass('score_rouge');
			$('.score_pret_append').addClass('score_rouge');
			$('.score_pret_append').val(val);
		break;
		case '96':
			var score =" ORANGE";
			
			var gar = get_garantie(id_pret,id_score);
			
			var is_gar = "SG";
			if(gar==1){
				is_gar = "AG";
			}
			var val = score +" " +is_gar;
			$('.score_pret_append').removeClass('score_noir');
			$('.score_pret_append').removeClass('score_vert');
			$('.score_pret_append').removeClass('score_orange');
			$('.score_pret_append').removeClass('score_rouge');
			$('.score_pret_append').addClass('score_orange');
			$('.score_pret_append').val(val);
			
		break;
		case '97':
			var score = "IRRECEVABLE";
			$('.score_pret_append').removeClass('score_noir');
			$('.score_pret_append').removeClass('score_vert');
			$('.score_pret_append').removeClass('score_orange');
			$('.score_pret_append').removeClass('score_rouge');
			$('.score_pret_append').addClass('score_noir');
			$('.score_pret_append').val(score);
			
		break;
		case 0:
			$('.score_pret_append').removeClass('score_noir');
			$('.score_pret_append').removeClass('score_vert');
			$('.score_pret_append').removeClass('score_orange');
			$('.score_pret_append').removeClass('score_rouge');
			$('.score_pret_append').val('');
		
	}
}
function get_garantie(id_pret,id_score){
	var base_url = $("#base_url").val();
	var url = base_url+"demande_cred/demande_cred/test_garantie";
	var data = {id_pret:id_pret};
	var garantie = 0;
	$.ajax({
				url: url,
				data : data,
				type: 'POST',
				success: function(response){
					
					garantie = response;
						
				},
				async: false
	});
	
	return garantie;
}
function if_is_connection_user(){
	var base_url = $("#base_url").val();
	var url = base_url+"auth/chek_connection";
	var data = {};
	var connection = false;
	$.ajax({
				url: url,
				data : data,
				type: 'POST',
				success: function(response){
					
					connection = response;
					if(connection==0){
						document.location.href = base_url+"/auth";
					}	
				},
				async: false
	});
	return connection;
}

// change dynamiquement margin-top : content
function change_magin_top(tolbar){
	var class_tolbar = "#"+tolbar;
	var height = $(class_tolbar).height();
	if(tolbar=='piece_joint'){
		$(".content_edition_view").css("margin-top",230);
	}
	else{
		//$("#content").css("margin-top",height+50);
		 $(".content_edition_view").css("margin-top",height+30);
	}
}
function separe_number(id){
	var id_t =  "#"+id;
	var val = $(id_t).val();
	if(val>0){
		$(id_t).val(number_format(val,2,'.',' '));
	}
}
function number_format(number, decimals, decPoint, thousandsSep){
	decimals = decimals || 0;
	number = parseFloat(number);

	if(!decPoint || !thousandsSep){
		decPoint = '.';
		thousandsSep = ',';
	}

	var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
	var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber;
	var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
	var formattedNumber = "";

	while(numbersString.length > 3){
		formattedNumber += thousandsSep + numbersString.slice(-3)
		numbersString = numbersString.slice(0,-3);
	}

	return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
}
function number_format_en_nombre(value){
	return value.replace(new RegExp(" ", 'g'), "");
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

function show_loader(selectorReference, spaceToAdd,z_index) {
	var z_index = z_index || 2000;
	$('[data-toggle="popover"]').popover('hide');
	$('#common_loader').css('display', "none");

	var spaceToAdd = spaceToAdd || 0;
	var top = 0;
	var left = 0;
	try {
		top  = $(selectorReference).offset().top;
		left = $(selectorReference).offset().left + spaceToAdd;
	}catch (e) {
		 // Do nothing
	}
	$("#common_loader").css('top', top + 'px');
	$("#common_loader").css('left', left + 'px');
	$('#common_loader').css('display', "block");
	$("#common_loader").css('z-index', z_index);
}

function init_popover(){
	// Popover pour les tooltips de bootstrap
	$('[data-toggle="popover"]').popover({
		trigger: 'hover',
		'placement': 'top',
		container: 'body',
		html:true
    }).on("show.bs.popover", function(e){
    	// Cacher s'il existe déjà
        $('[data-toggle="popover"]').not(e.target).popover("hide");        
    });
	
}


function format(elt, mask){
	elt.mask(mask);
}

function date_en_to_fr(date_en){
	// inputs date in yyyy-mm-dd format
	parts = date_en.split('-');
	tmp = parts[0];
	parts[0] = parts[2];
	parts[2] = tmp;
	return parts.join('/');
}

function date_fr_to_en(date_fr){
	// inputs date in dd/mm/yyyy format
	parts = date_en.split('/');
	tmp = parts[0];
	parts[0] = parts[2];
	parts[2] = tmp;
	return parts.join('-');
}


function get_select_option_values(element_id){
	var option_selected = $(element_id + " option:selected");
	values = new Array();
	for(i=0; i < option_selected.length; i++){
		values.push(option_selected[i].value);
	}
	return values;
}

function alertbox(title, message, label_ok){
	label_ok = label_ok || 'OK';
	bootbox.alert({
	    title: title,
	    message: message,
	    buttons: {
	        'ok': {
	            label: label_ok,
	            className: 'btn-primary btn-primary-familiplace'
	        }
	    }
	});
}

function get_difference_mois(date1,date2){
	var d1= date1.split("/");
	var d2 = date2.split("/");
	
	var newD1 = new Date(d1[2],d1[1],d1[0]);
	var newD2 = new Date(d2[2],d2[1],d2[0]);
	
	
	var d1Y = newD1.getFullYear();
        var d2Y = newD2.getFullYear();
        var d1M = newD1.getMonth();
        var d2M = newD2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
}
function verification_age_min(date,min){
	var date_compare = new Date();
	var date_comp_p= date.split("/");
	var year1 = date_compare.getFullYear();
	var mois = date_compare.getMonth();
	var diff_age = year1-date_comp_p[2];
	var jour =date_compare.getDate() ;
	var age = diff_age;
	if((mois+1) < date_comp_p[1]){
		age = age +1;
	}
	if((mois+1)== date_comp_p[1]){
		if(jour<date_comp_p[0]){
			age = age +1;
		}
	}
	//*Test age apres*//
	if(age<min){
		return false;
	}
	return true;
	
	
	
}
//Date modifier par Nampoina
function current_date() {
	var dat = new Date();
	var jour =dat.getDate() ;
	var mois= dat.getMonth();
	var j = ''+jour;
	var m = ''+(mois+1);
	if(jour<10)
	j ='0'+jour;
	if((mois+1)<10) m = '0'+(mois+1);
	return j+"/"+m+"/"+dat.getFullYear();
}

function format_date(str) {
	var l = str.length;
	return str.substring(6)+'/'+str.substring(3,5)+'/'+str.substring(0,2);
}

//alerte : 
function add_alerte(type,message,id_alerte){
	$('#alerte_icon').show();
	var elem = document.getElementById('alerte_'+type);
	if(elem==null){
		var nbr = 0;
		if($('#nbr_alerte').text()!=""){
			nbr = parseInt($('#nbr_alerte').text());
		}
		$('#nbr_alerte').text(nbr+1);
		var content = "<li id='alerte_"+type+"'><a href='#'>"+message+"</a></li><li id='divider_'"+type+"class='divider'></li>"
		$('#content_alerte').append(content);
		$('.alerte_dossier').show();
		switch(id_alerte){
		 case 1 :
			 Errormessage(message);
			 $('#alerte_'+type).on('click',function(){
				 Errormessage(message);
			 });
			 break;
		 case 2 : 
			 $('#bodyModalInfo_alerte').text(message);
			 $('#modal_alerte').modal('show');
			 $('#btnokInfo_alerte').on('click',function(){
				 $('#bodyModalInfo_alerte').text(message);
				 $('#modal_alerte').modal('hide');
				 $('#btnokInfo_alerte').unbind('click');
			 });
			 $('#alerte_'+type).on('click',function(){
				 $('#bodyModalInfo_alerte').text(message);
				 $('#modal_alerte').modal('show');
				 $('#btnokInfo_alerte').on('click',function(){
					 $('#bodyModalInfo_alerte').text(message);
					 $('#modal_alerte').modal('hide');
					 $('#btnokInfo_alerte').unbind('click');
				 });
			 });
			 break;
		}
	}
}

function remove_alerte(type){
	var elem = document.getElementById('alerte_'+type);
	if(elem!=null){
		$('#alerte_'+type).remove();
		$('#divider_'+type).remove();
		var nbr = 0;
		if($('#nbr_alerte').text()!="") nbr = parseInt($('#nbr_alerte').text());
		if(nbr-1>0)
		$('#nbr_alerte').text(nbr-1);
		else {
			$('#alerte_icon').hide();
			$('#nbr_alerte').text("");
			$('.alerte_dossier').hide();
		}
		$('#alerte_'+type).unbind('click');
	}
}

var InfoMessage = (function() {
   "use strict";
   var elem,
       hideHandler,
       that = {};

   that.init = function(options) {
       elem = $(options.selector);
   };

   that.show = function(text) {
       clearTimeout(hideHandler);
       //CRA : 05/02/2016 : Ajouter ce contrôle pour le cas de plusieurs onglets
       if (elem) {
    	   elem.find("span").html(text);
       } else {
           elem = $(".succes");
           elem.show();
           elem.children("span").html(text);    	   
       }
       elem.delay(200).fadeIn().delay(4000).fadeOut();
   };

   return that;
}());


var ErrorMessage = (function() {
	"use strict";
	var elem,hideHandler,that = {};
	that.init = function(options) {
	    elem = $(options.selector);
	};
	that.show = function(text) {
		clearTimeout(hideHandler);
		console.log(elem);
		//CRA : 05/02/2016 : Ajouter ce contrôle pour le cas de plusieurs onglets
		if (elem) {
			elem.find("span").html(text);
		} else {		
		    elem = $(".error");
		    elem.show();
		    elem.children("span").html(text);
		}
	    elem.delay(200).fadeIn().delay(4000).fadeOut();
	};
	return that;
}());
function supprimer_dernier_caractere(elm) {
	var val = $(elm).val();
	var cursorPos = elm.selectionStart;
	$(elm).val(
	   val.substr(0,cursorPos-1) + // before cursor - 1
	  val.substr(cursorPos,val.length) // after cursor
	)
	elm.selectionStart = cursorPos-1; // replace the cursor at the right place
	elm.selectionEnd = cursorPos-1;
}

function getValForm(id) {
    var data = {};
    $(id+' :input:not(:button)').each(function () {
      var $input = $(this);

      data[$input.attr('name')] = function () {
        if ($input.is(':checkbox')) {
          return Number($input.is(':checked'));
        }
        else {
          return $input.val();
        }
      };
    });
    return data;
}
function check_numerique(me){
	var valeur=$(me).val();
	if( $.isNumeric(valeur)==false){
		$(me).attr('class','form-control form-control-error');
		$(me).val('');
	}else{
		$(me).removeClass('form-control-error');         
	}  
}


//Mask de saisie
function Masknumber(cl){
	$('.'+cl).on('keyup',function(){
		 if(!$(this).val().match(/^[0-9\.]*$/i)) // a-z et 0-9 uniquement
		      supprimer_dernier_caractere(this);
		 if(get_nb_point($(this).val())) supprimer_dernier_caractere(this);
		 var temp = $(this).val().split('.');
		 if(temp.length>1){
			 if(temp[1].length>2){
				 supprimer_dernier_caractere(this);
			 }
		 }
	 });
	}
function Mask_des_taux(cl){
	$('.'+cl).on('keyup',function(){
		 if(!$(this).val().match(/^[0-9\.]*$/i)) // a-z et 0-9 uniquement
		      supprimer_dernier_caractere(this);
		 if(get_nb_point($(this).val())) supprimer_dernier_caractere(this);
		 var value = $(this).val();
		 var temp = value.split('.');
		 if(temp.length>1){
			 if(temp[0]>100 || temp[1].length>2){
				 supprimer_dernier_caractere(this);
			 }
		 }
		 else{
				 if(temp[0]>100){
					 supprimer_dernier_caractere(this);
				 }
			 }
		 
	 });
	}
function get_nb_point(str){
	var count = 0;
	for(var i=0;i<str.length;i++){
		if(str[i]=="."){
			count++;
		}
		if(count>1) return true;
	}
	return false;
}
	function Maskradical(cl){
		$('.'+cl).on('keyup',function(){
			 if(!$(this).val().match(/^[0-9]*$/i)) // a-z et 0-9 uniquement
			      supprimer_dernier_caractere(this);
			 if($(this).val().length>6) supprimer_dernier_caractere(this);

		 });
	}
	function Maskcle(cl){
		$('.'+cl).on('keyup',function(){
			 if(!$(this).val().match(/^[0-9]*$/i)) // a-z et 0-9 uniquement
			      supprimer_dernier_caractere(this);
			 if($(this).val().length>1) supprimer_dernier_caractere(this);

		 });
	}
/*alerte perso modifier par nampoina*/
function infoMes(mess,type)
{
	$('#divmess').html('<div id="info_message" class="" style="width:30%;position:absolute;display:none;top:50%;right:0%;"></div>');
	$('#info_message').attr('class',type);
	$('#info_message').show();
	$('#info_message').html('<h4>'+mess+'</h4>').fadeIn(600);
	setTimeout(function(){
	    $('#info_message').hide();
	}, 4000);
}

$('.btn-success').attr('class','btn btn-danger');
   
/*** coockies JS ***/ 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
	var nbdays = exdays||1;//nb jour validiter coockies, par defaut 1
    d.setTime(d.getTime() + (nbdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
/** Fonction des masques ***/
function supprimer_dernier_caractere(elm) {
	   var val = $(elm).val();
	 var cursorPos = elm.selectionStart;
	 $(elm).val(
	    val.substr(0,cursorPos-1) + // before cursor - 1
	   val.substr(cursorPos,val.length) // after cursor
	 )
	 elm.selectionStart = cursorPos-1; // replace the cursor at the right place
	 elm.selectionEnd = cursorPos-1;
	}

   function Masknumber2(input){
	input.on('keyup',function(){
	  if(!$(this).val().match(/^[0-9]*$/i)) //  0-9 uniquement
	       supprimer_dernier_caractere(this);
	 });
	}

function Masktaux(input){
     input.on('keyup',function(){
	  if(!$(this).val().match(/^[0-9.]*$/i)) //  0-9 et , uniquement
	       supprimer_dernier_caractere(this);
	 });
	}
    
 /*** Fomatage en millier ***/
 function formatMillier( nombre){
	  var p = nombre_point(nombre);
	  var temp = (nombre+"").split('.');
	  nombre = temp[0];
	  nombre += '';
	  var sep = ' ';
	  var reg = /(\d+)(\d{3})/;
	  while( reg.test( nombre)) {
	    nombre = nombre.replace( reg, '$1' +sep +'$2');
	  }
	  if(p) return nombre+'.'+temp[1];
	  return nombre;
	} 
 function nombre_point(str){
	 var count = 0;
		for(var i=0;i<str.length;i++){
			if(str[i]=="."){
				count++;
			}
			if(count>=1) return true;
		} 
 }
 function enleveMillier_temp(nombre){
		for(var i=0;i<nombre.length;i++)
		 {
			 if(nombre.charAt(i)==" ")
			 {
				 nombre = nombre.substring(0,i)+''+nombre.substring(i+1);
			 }
		 }
		return nombre;
	}
 function format_millier_class(cl){
	 $("."+cl).on("blur",function(){
		 var contenu = enleveMillier_temp($(this).val());
		 var resultat = formatMillier(contenu);
		 $(this).val(resultat);
		 if($(this).val()[$(this).val().length-1]=='.'){
			 supprimer_dernier_caractere(this);
		 }
		 if($(this).val()[0]=='.'){
			 $(this).val($(this).val().substring(1));
		 }
	 });
	 $("."+cl).on("focus",function(){
		 var contenu = enleveMillier_temp($(this).val());
		 $(this).val(contenu);
	 });
 }
 function verificate_datalist(id,value){

		var data = document.getElementById(id);
		var option = data.getElementsByTagName('option');
		for(var i=0;i<option.length;i++){
			if(option[i].value==value){
			
				return true;
			}
		}
		return false;
}
function efface_point(cl){
	$("."+cl).on('blur',function(){
		if($(this).val()[0]=='.')
		{
			$(this).val($(this).val().substring(1));
		}
		if($(this).val()[$(this).val().length-1]=='.'){
			 supprimer_dernier_caractere(this);
		 }
	});
}
  //$('.acacher').hide();


  /* TSIRY*/
  $('.champ_date').on('keydown',function(){
		MaskDate('champ_date');
	});
function MaskDate(cl){	
	$('.'+cl).on('keyup',function(){
		if($(this).val().length!=3 && $(this).val().length!=6)
		{
			 if(!$(this).val().substring($(this).val().length-1).match(/[0-9]/i)) // a-z et 0-9 uniquement
			      supprimer_dernier_caractere(this);
		      if($(this).val().length==2 && $(this).val().substring(0,2)>31)
		      {
			      $(this).val('');
		      }
		      if($(this).val().length==5 && $(this).val().substring(3,5)>12)
		      {
			     
			      $(this).val($(this).val().substring(0,3));
		      }
		}
		else {
			 if(!$(this).val().substring($(this).val().length-1).match(/[/]/i)) {
			      supprimer_dernier_caractere(this);
			 }
		}
		if($(this).val().length>10){
			   supprimer_dernier_caractere(this);
		}
	 });
}

/* TSIRY*/
function Errormessage(txt) {
    var elem = $(".error");
    elem.fadeIn("slow");
    elem.children("span").text(txt);
 elem.fadeOut(3000);
}
function Infomessage(txt) {
    var elem = $(".succes");
    elem.fadeIn("slow");
    elem.children("span").text(txt);
 elem.fadeOut(3000);
}


/* Pad left */
var STR_PAD_LEFT = 1;
var STR_PAD_RIGHT = 2;
var STR_PAD_BOTH = 3;

function pad(str, len, pad, dir) {

    if (typeof(len) == "undefined") { var len = 0; }
    if (typeof(pad) == "undefined") { var pad = ' '; }
    if (typeof(dir) == "undefined") { var dir = STR_PAD_RIGHT; }

    if (len + 1 >= str.length) {

        switch (dir){

            case STR_PAD_LEFT:
                str = Array(len + 1 - str.length).join(pad) + str;
            break;

            case STR_PAD_BOTH:
                var right = Math.ceil((padlen = len - str.length) / 2);
                var left = padlen - right;
                str = Array(left+1).join(pad) + str + Array(right+1).join(pad);
            break;

            default:
                str = str + Array(len + 1 - str.length).join(pad);
            break;

        } // switch

    }

    return str;

}





//Nampoina calcul difference entre deux date en mois
function get_diff_date(date1,date2,an_ref){
	var date_split1 = date1.split("/");
	var date_split2 = date2.split("/");
	var dif_year = (date_split2[2]-date_split1[2])*12;
	var dif_month = date_split2[1]-date_split1[1];
	var nbfev = 28;
	var tab_jour = new Array(31,nbfev,31,30,31,30,31,31,30,31,30,31);
	if((an_ref - parseInt(date_split2[2]))%4==0){
		nbfev = 29;
		tab_jour[1]=nbfev;
	}
	var m_jour2 = parseInt(date_split2[0])/tab_jour[parseInt(date_split2[1])-1];
	if((an_ref - parseInt(date_split1[2]))%4==0){
		nbfev = 29;
		tab_jour[1]=nbfev;
	}
	var m_jour1 = parseInt(date_split1[0])/tab_jour[parseInt(date_split1[1])-1];
	var diff_jour = m_jour2 - m_jour1;
	return dif_year + dif_month + diff_jour;
}
function change_select_value(id,libelle,val)
{
	$('#'+id).val(val);
	$('button[data-id='+id+']').attr('title',libelle);
	$('button[data-id='+id+']').html('<span class="filter-option pull left">'+libelle+'</span><span class="caret"></span>');
}
function verificate_dropdown(class_name,message,is_co_emp){
	if(is_co_emp){
		var drops = document.querySelectorAll("."+class_name);
		var j=0;
		for(var i=0;i<drops.length;i++){
			if(drops[i].value=="0"){
				$('#error_'+drops[i].id).text(message);
				j++;
			}
		}
		if(j>0) return false;
	}
	return true;
}

function add_duree_date(str_date,nb,unite){
	var cont = str_date.split("/");
	var j = cont[0],m = cont[1],y = cont[2];
	if(unite=="m"){
		if(parseInt(nb)>=12){
			m =parseInt(m) + parseInt(nb)%12;
			y = parseInt(y) + parseInt(parseInt(nb)/12);
		}
		else{
				m = parseInt(m)+nb;
				if(parseInt(m)<=0) y = parseInt(y) - 1;
		}
		if(parseInt(m)<=0){
			m = 12-parseInt(m);
		}
	}
	if(unite=="y"){
		y = parseInt(y)+nb;
	}
	return build_date(j,m,y);
}
function build_date(j,m,y){
	var res = "";
	j = parseInt(j);
	m = parseInt(m);
	y = parseInt(y);
	if(j<10){
		res+="0"+j+"/";
	}
	else res+=j+"/";
	if(m<10){
		res+="0"+m+"/";
	}
	else res+=m+"/";
	res+=y;
	return res;
}

function get_libelle_by_value_select(id,val){
	var elem = document.getElementById(id);
	if(elem!=null){
		var option = elem.getElementsByTagName("option");
		for(var i=0;i<option.length;i++){
			if(option[i].value==val){
				return option[i].innerHTML;
			}
		}
	}
	return -1;
}
function change_select_value_perso(id,val)
{
	var libelle =get_libelle_by_value_select(id,val);
	if(libelle!="-1"){
		$('#'+id).val(val);
		$('button[data-id='+id+']').attr('title',libelle);
		$('button[data-id='+id+']').html('<span class="filter-option pull left">'+libelle+'</span><span class="caret"></span>');
	}
}
/*
function change_content_select(id,tab_val,tab_lib){
	var parent = $('#'+id).parent();
	var style = $("#"+id).attr("style");
	var class_name = $("#"+id).attr("class");
	var title = $("#"+id).attr("title");
	var search = $("#"+id).attr("data-live-search");
	var name = $("#"+id).attr("name");
	var res = "<select id='"+id+"' name='"+name+"' title='"+title+"' class='"+class_name+"' data-live-search='"+search+"' style='"+style+"'><option value='0'></option>";
	for(var i=0;i<tab_val.length;i++){
		res+="<option value='"+tab_val[i]+"'>"+tab_lib[i]+"<option>";
	}
	res+="\n</select>"
	parent.html('');
	parent.html(res)
	selectpicker = $('.selectpicker').selectpicker({
        'selectedText': 'cat',
        'noneSelectedText': ''
    });
}
*/
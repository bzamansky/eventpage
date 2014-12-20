$(document).ready(function(){
	$('button').click(function(){
		submit()
	});
});

function submit(){
	if (($("input[name='name'").val() == "") || ($("input[name='email'").val() == "")) {
		$("#error").fadeIn();
	}
	else{
		$('#submitted').fadeIn();
		$("#error").fadeOut();
	}

}
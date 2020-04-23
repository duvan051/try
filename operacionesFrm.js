/*$(document).ready(function(){
	$("#botonenviar").click(function(){
		validarForm();
	});	
});*/


function validarForm(){
	if($("#nombre").val()==""){
		alert("El campo nombre no puede estar vacio");
		$("#nombre").focus();
		return false;
	}
	if($("#apellidos").val()==""){
		alert("El campo apellidos no puede estar vacio");
		$("#apellidos").focus();
		return false;
	}
	if($("#direccion").val()==""){
		alert("El campo direccion no puede estar vacio");
		$("#direccion").focus();
		return false;
	}
	if($("#mayor").is(":checked")){
	}else{
		alert("El campo mayor no puede estar vacio");
		return false;
	}
	return true;
};

/*$(document).ready(function(){
	$("#botonenviar").click(function(){
		if(validarForm()){
			$("#fracaso").hide();
			$("#exito").delay(500).fadeIn("slow");
		}else{
			$("#exito").hide();
			$("#fracaso").delay(500).fadeIn("slow");
		}
	});
});*/

$(document).ready(function(){
	$("#botonenviar").click(function(){
		if(validarForm()){
			if($("#fracaso").is(":visible")){
				$("#fracaso").fadeOut();
			}
			$("#exito").delay(500).fadeIn("slow");
		}else{
			if($("#exito").is(":visible")){
				$("#exito").fadeOut("fast");
			}
			$("#fracaso").delay(500).fadeIn("slow");
		}
	});
});
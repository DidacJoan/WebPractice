$(document).ready(function ()
{
	$("#myForm").submit(function()
	{
		 return checkForm();
	});

	$("#myForm input[name=boton]").change(function() 
	{
		$("#myForm input[name=archivo]").val($("#myForm input[name=boton]").val());
	});
});

function checkForm()
{
	var dni		  = $("#myForm input[name=dni]").val(),
		nombre    = $("#myForm input[name=nombre]").val(),
		apellidos = $("#myForm input[name=apellidos]").val(),
		correo    = $("#myForm input[name=correo]").val(),
		calle     = $("#myForm input[name=calle]").val(),
		poblacion = $("#myForm input[name=poblacion]").val(),
		provincia = $("#myForm input[name=provincia]").val(),
		archivo   = $("#myForm input[name=archivo]").val();

	var allCorrect = true;

	if ( dni == null || dni == "" || dni.length < 9) {
		alert("Rellena el campo del dni correctamente");
		allCorrect = false;
	}

	if (nombre == null || nombre === "") {	
		alert("Rellena el campo del nombre");
		allCorrect = false;
	}
	
	if (apellidos == null || apellidos === ""){
		alert("Rellena el campo del apellido");
		allCorrect = false;
	}
		
	if (correo == null || correo === ""){ 		
		alert("Rellena el campo del correo");
		allCorrect = false;
	}

	if (emptyRadio){
		alert("Rellena el campo del sexo");
		allCorrect = false;
	}
	
	if (calle == null || calle === ""){
		alert("Rellena el campo de la calle");
		allCorrect = false;
	}
	
	if (poblacion == null || poblacion === ""){
		alert("Rellena el campo de la poblacion");
		allCorrect = false;
	}
	
	if (provincia === "default"){
		alert("Selecciona una provincia");
		allCorrect = false;
	}
	
	if (archivo == null || archivo === ""){
		alert("Selecciona un archivo"); 
		allCorrect = false;
	}
	return allCorrect;
}

function emptyRadio()
{
	var valuesArray = $("#myForm input[name=sexo]").val()
	for(var i = 0; i < valuesArray.length; ++i) 
	{
		if(valuesArray[i].checked == true) return false;
	}
	return true;
}


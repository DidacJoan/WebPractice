document.forms["myForm"].addEventListener("submit",checkForm,false);
document.forms["myForm"]["boton"].addEventListener("change",uploadText,false);

function checkForm()
{
	var dni   = document.forms["myForm"]["dni"].value,
		nombre    = document.forms["myForm"]["nombre"].value, 
		apellidos = document.forms["myForm"]["apellidos"].value,
		correo    = document.forms["myForm"]["correo"].value,
		calle     = document.forms["myForm"]["calle"].value,
		poblacion = document.forms["myForm"]["poblacion"].value,
		provincia = document.forms["myForm"]["provincia"].value,
		archivo   = document.forms["myForm"]["archivo"].value;

	if ( dni == null || dni == "") 
		alert("Rellena el campo del dni correctamente");

	if (nombre == null || nombre === "") 		
		alert("Rellena el campo del nombre");
	
	if (apellidos == null || apellidos === "") 	
		alert("Rellena el campo del apellido");
		
	if (correo == null || correo === "") 		
		alert("Rellena el campo del correo");
		
	if (emptyRadio) 	
		alert("Rellena el campo del sexo");
	
	if (calle == null || calle === "") 		
		alert("Rellena el campo de la calle");
	
	if (poblacion == null || poblacion === "") 	
		alert("Rellena el campo de la poblacion");
	
	if (provincia === "default")
		alert("Selecciona una provincia");
	
	if (archivo == null || archivo === "") 		
		alert("Selecciona un archivo"); 
}

function uploadText() 
{
	var boton = document.forms["myForm"]["boton"].value,
		text = document.forms["myForm"]["archivo"].value;
	archivo = boton;
}

function emptyRadio()
{
	var valuesArray = document.forms["myForm"]["sexo"];
	for(var i = 0; i < valuesArray.length; ++i) 
	{
		alert(valuesArray[i].checked);
		if(valuesArray[i].checked == true) return false;
	}
	return true;
}


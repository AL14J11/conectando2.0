//JavaScript Document
var  ID_Usuario = "";
function LoginConectar(U,P)
{
	datos = "Usuario="+U+"& Password="+p;
	$.ajax({
		type:POST,
		url:"http://192.168.1.184/Sitio6/Log_in_m.php",
		data:datos
	}).done(function(msg){
		alert(msg);
		if (msg=="" || msg==null)
		{
			alert("Usuario Incorrecto");
		}
		else
		{
			var  OUsuario = jQuery.parseJSON(msg);
			ID_Usuario = OUsuario.Usuario;
			alert("Bienvenido " + ID_Usuario");
			location.href = "#Busqueda";
		}
	});
}

$(document).ready (function(e) {
	document.addEventListener("deviceready",function(){
		$('.Enviar').tap(function(){
			var formulario = $(this).parents('form');
			var Usuario = document.getElementById('Usuario').value;
			var Password = document.getElementById('Password').value;
			LoginConectar(Usuario,Password);
		});//tap
	});//deviceready
});//ready

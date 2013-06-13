//JavaScript Document
function LoginConectar(U,P)
{
	datos = "usuario="+U+"& password="+p;
	$.ajax({
		type:POST,
		url:"192.168.1.184/Sitio6/Log_in_m.php",
		data:datos
	}).done(function(msg){
		alert(msg);
		if (msg=="" || msg==null)
		{
			alert("Usuario Incorrecto");
		}
		else
		{
			alert("Bienvenido");
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
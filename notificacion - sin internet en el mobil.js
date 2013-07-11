
document.addEventListener("deviceready", function(){
	
	document.addEventListener("offline", function(){

		navigator.notification.alert("Te has quedado sin internet", function(){
		//función para ejecutar cuando el usuario acepte el mensaje de alert	
		}, "Problema de Conexión", "Aceptar");	


	}, false);	

}, false);
$(document).ready(function(){
		var StreamOrigen = "http://199.217.118.9:7426/";
		$("#jquery_jplayer_1").jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {m4a:StreamOrigen+"/;stream/1"}).jPlayer("play");
			}, swfPath: "js/", supplied: 'm4a, oga', wmode: "window"});
		document.addEventListener("deviceready", function(){

			navigator.splashscreen.show();

			document.addEventListener("offline", function(){
				//document.getElementById("error").innerHTML="No hay conexión a internet, Vuelva a intentarlo más tarde.";
				alert("no hay internet");
			}, false);
			document.addEventListener("online", function(){
				//document.getElementById("error").innerHTML="No hay conexión a internet, Vuelva a intentarlo más tarde.";
				alert("ya hay internet");
			}, false);
		}, false);
});
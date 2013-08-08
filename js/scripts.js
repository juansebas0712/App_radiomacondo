$(document).ready(function(){
		var StreamOrigen = "http://199.217.118.9:7426";
		$("#jquery_jplayer_1").jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {mp3:"http://listen.radionomy.com/abc-jazz"}).jPlayer("play");
		}, swfPath: "js/", supplied: 'mp3', wmode: "window"});
			/*$("#jquery_jplayer_1").jPlayer({
				ready: function (event) {
					$(this).jPlayer("setMedia", {
						m4a:"http://199.217.118.9:7426/;stream/1",
					});
				},
				swfPath: "js/",
				supplied: "m4a",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});*/
		document.addEventListener("deviceready", function(){
			document.addEventListener("offline", function(){
				document.getElementById("error").style.display="block".innerHTML="No hay conexión a internet, Vuelva a intentarlo más tarde.";
			}, false);
		}, false);

		//feed de noticias
		$('#ticker1').rssfeed('http://radiomacondo.fm/feed/',{
		    limit: 5,
		    dateformat: 'date',
		    linktarget: '_blank'
		  });

});
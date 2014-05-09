$(document).ready(function(){
		var StreamOrigen = "http://144.76.109.79:7998";

		        $("#jquery_jplayer_1").jPlayer({

		            ready: function (event) {

		                $(this).jPlayer("setMedia", {

		                    mp3:StreamOrigen+"/;stream/1"

		                }).jPlayer("play");

		            },

		            swfPath: "/",

		            supplied: "mp3",

		            wmode: "window"

		        });


		

			
		document.addEventListener("deviceready", function(){
			document.addEventListener("offline", function(){
				document.getElementById("error").style.display="block";
				document.getElementById("error").innerHTML="No hay conexión a internet, Vuelva a intentarlo más tarde.";
			}, false);
		}, false);

		//feed de noticias
		$('#ticker1').rssfeed('http://radiomacondo.fm/feed/',{
		    limit: 5,
		    dateformat: 'MMMM dd yyyy',
		    linktarget: '_blank'
		  });

});
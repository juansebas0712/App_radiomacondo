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
		       
		       
		     /*  var stream = {
					title: "Radiomacondo",
					mp3: "http://listen.radionomy.com/abc-jazz"
				},
				ready = false;
			
				$("#jquery_jplayer_1").jPlayer({
					ready: function (event) {
						ready = true;
						$(this).jPlayer("setMedia", stream);
					},
					pause: function() {
						$(this).jPlayer("clearMedia");
					},
					error: function(event) {
						if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
							// Setup the media stream again and play it.
							$(this).jPlayer("setMedia", stream).jPlayer("play");
						}
					},
					swfPath: "/",
					supplied: "mp3",
					preload: "none",
					wmode: "window",
					keyEnabled: true
				});*/


		

			
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
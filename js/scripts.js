$(document).ready(function(){
		var StreamOrigen = "http://listen.radionomy.com/abc-jazz";
		$("#jquery_jplayer_1").jPlayer({
			ready: function (event) {
				$(this).jPlayer("setMedia", {mp3:StreamOrigen+"/;stream/1"}).jPlayer("play");
			}, swfPath: "js/", supplied: "mp3", wmode: "window"});

		var current = $('.ui-navbar a').text();
});
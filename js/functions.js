
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date) {
	var current = Date();
	var miliseconds = (Date.parse(current) - Date.parse(date)) / 1000;

	// // var years = Math.floor(seconds / (3600 * 24 * 30.44 * 12));

	// // seconds = seconds % (3600 * 24 * 30.44 * 12);
	// var days = Math.floor(seconds / (3600 * 24));
	
	// seconds = seconds % (3600 * 24);
	// var hours = Math.floor(seconds / 3600);
	// if (hours < 10) {
	// 	hours = "0" + hours;
	// }

	// seconds = seconds % 3600;
	// var minutes = Math.floor(seconds / 60);
	// if (minutes < 10) {
	// 	minutes = "0" + minutes;
	// }

	// seconds = seconds % 60;
	// if (seconds < 10) {
	// 	seconds = "0" + seconds;
	// }

	var years = Math.floor(miliseconds / 31536000);
	miliseconds -= years * 31536000;

	var months = Math.floor(miliseconds / 2592000);
	miliseconds -= months * 2592000;

	var weeks = Math.floor(miliseconds / 604800);
	miliseconds -= weeks * 604800;

	var days = Math.floor(miliseconds / 86400);
	miliseconds -= days * 86400;

	var hours = Math.floor(miliseconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}

	miliseconds -= hours * 3600;
	var minutes = Math.floor(miliseconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	miliseconds -= minutes * 60;
	var seconds = Math.floor(miliseconds / 1);
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	var result = "<span class=\"digit\">" 
	+ years + "</span> năm <span class=\"digit\">"
	+ months + "</span> tháng <span class=\"digit\">"
	+ weeks + "</span> tuần <span class=\"digit\">"
	+ days + "</span> ngày <span class=\"digit\">" 
	+ hours + "</span> giờ <span class=\"digit\">" 
	+ minutes + "</span> phút <span class=\"digit\">" 
	+ seconds + "</span> giây";
	// var results = "<span>"+ date + "</span>";
	$("#clock").html(result);
	// $("#time").html(results);
}

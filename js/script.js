$('#go').click(function() {

	function checkIfComplete() {
		if(raceOver == false) {
			raceOver = true;
		} else {
			place = 'second';
		}
	}
	var hareWidth = $('#hare').width();
	var tortoiseWidth = $('#tortoise').width();
	var pathWidthHare = $('#path').width() - hareWidth;
	var pathWidthTortoise = $('#path').width() - tortoiseWidth;

	var raceTimeHare = Math.floor((Math.random() * 500) +1); 
	raceTimeHare = Math.round(raceTimeHare*100)/10;

	var raceTimeTortoise = Math.floor((Math.random() * 500) +1); 
	raceTimeTortoise = Math.round(raceTimeTortoise*100)/10;

	var raceOver = false;
	var place = 'first';


	$('#tortoise').animate({
			left: pathWidthTortoise
		}, raceTimeTortoise, function() {
			checkIfComplete();
			$('#raceInfo1 span').text( ' finished in ' + place + ' place and clocked in at '+ raceTimeTortoise/1000 + ' seconds');

			});
		


	$('#hare').animate({
		left: pathWidthHare
	}, raceTimeHare, function() {
		checkIfComplete();
		$('#raceInfo2 span').text( ' finished in ' + place + ' place and clocked in at '+ raceTimeHare/1000 + ' seconds');

		});
	});

	$('#reset').click(function() {
		$('.animal').css('left','0');
		$('.raceInfo span').text('');
	});
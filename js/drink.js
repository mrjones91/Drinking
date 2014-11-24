//var now = new Date(month, day, year);
//(year, month, day, hour, minute, second, millisecond);


(function(){

	//Gibberish starts

	var noImgs = [], yesImgs = [];
	var rand = 0;
	var hr, mn;
	var result = $('#dialog');

	var calculateTime = function(hr, mn){
		if (hr >= drinkTime.drinkHour)
			return true;
		else
			return false;
	};

	result.dialog({
				autoOpen: false,
				show: {
					effect: "blind", duration: 1000
				},
				hide: {
					effect: "explode", duration: 1000
				}
			});

	$(document).ready(function(){

		$.ajax({
	url: "./content/ims.json",
	type: "GET",
	dataType: "json"
	}).done(function(data) {
		noImgs = data.noGifs;
		yesImgs = data.yesGifs;

		for(i = 0; i <= 1; i++)
		{
			for (j = 0; j < noImgs.length; j++)
			{
				var newImg = document.createElement('img');
				newImg.style.display = 'none';
				newImg.alt = "Whoops, the correct image is gone to happy hour! (Go join it!)";
				if (i == 0)
				{
					newImg.src = noImgs[j].link;
					newImg.id = j;
					document.getElementById('negatives').appendChild(newImg);
				}
				else
				{
					newImg.src = yesImgs[j].link;
					newImg.id = j + 8;
					document.getElementById('positives').appendChild(newImg);
				}
				
				
			}
		}
		
		
		
	});



		$('#drank').click(function(){
			//alert(calculateTime());
			hr = document.getElementById('uHour').value;
			mn = document.getElementById('uMinute').value;

			if (calculateTime(hr, mn))
			{
				$('#' + rand).hide();
				rand = Math.floor(Math.random() * 15 + 8);
				//alert(rand);
				if (rand > 15)
				{		
					rand = 8 + (rand - 15);
					//alert(rand);
				}
				$('#' + rand).show();
			}
			else
			{
				$('#' + rand).hide();
				rand = Math.floor(Math.random() * 7);
				if (rand > 7)
				{		
					rand = (rand - 7) + 0;
					//alert(rand);
				}
				$('#' + rand).show();
			}
			// = yesImgs[Math.floor(Math.random() * 10 + 1)] ;
			result.dialog('open');
		});
		
	});


})();


		
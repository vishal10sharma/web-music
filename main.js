				function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) {
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			}
			else {
			console.log('Pausing');
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			}
			}
			function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
window.onload = function() {
  var ctx = new AudioContext();
  var audio = document.getElementById('audio');
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  // we have to connect the MediaElementSource with the analyser 
  audioSrc.connect(analyser);
  // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
 
  // frequencyBinCount tells you how many values you'll receive from the analyser
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);
 
  // we're ready to receive some data!
  // loop
  function renderFrame() {
     requestAnimationFrame(renderFrame);
     // update data in frequencyData
     analyser.getByteFrequencyData(frequencyData);
     // render frame based on values in frequencyData
     // console.log(frequencyData)
  }
  audio.start();
  renderFrame();
};
//................................................................



		
			



//....................
			function updateCurrentTime() {
			var song = document.querySelector('audio');
			var currentTime = Math.floor(song.currentTime);
			 currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			 duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);
			}
//clike event bnaya jo song pe clike krne pr play or pause ho..			
			function addSongNameClickEvent(songName,position) {
				var id = '#song' + position;
			$(id).click(function() {
			var audio = document.querySelector('audio');
			var currentSong = audio.src;
			if(currentSong.search(songName) != -1)
			{
			toggleSong();
			}
			else {
			audio.src = songName;
			toggleSong();
			}
			});
			}
			
			
			
			
						window.onload = function() {
						
						updateCurrentTime(); 
						setInterval(function() {
						updateCurrentTime();
						},1000);
						
						//.............songs names.......................
					var songList =['Car nachdi','Bebe Di Pasand ','Color Black','Hu Haal Ve','Muchh','Shades of Black','HiGh Rated GaBru']
					var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3','song5.mp3','song6.mp3','song7.mp3'];
				//var songName1 = 'Car nachdi';
				// var songName2 = 'Bebe Di Pasand ';
				//var songName3 = 'Color Black';
				//var songName4 = 'Hu Haal Ve';
				//var songName5 = 'Muchh';
				//var songName6 = 'Shades of Black';
						//
						$('#song1 .song-name').text(songList[0]); 
						$('#song2 .song-name').text(songList[1]);
						$('#song3 .song-name').text(songList[2]);
						$('#song4 .song-name').text(songList[3]);
						$('#song5 .song-name').text(songList[4]);
						$('#song6 .song-name').text(songList[5]);
						$('#song7 .song-name').text(songList[6]);
					
						
					addSongNameClickEvent(fileNames[0],1);
					addSongNameClickEvent(fileNames[1],2);
					addSongNameClickEvent(fileNames[2],3);
					addSongNameClickEvent(fileNames[3],4);	
					addSongNameClickEvent(fileNames[4],5);	
					addSongNameClickEvent(fileNames[5],6);	
					addSongNameClickEvent(fileNames[6],7);
						}


	
<!------------------------------------------function end-------------------------------------------------------------------------------------------------->	
	
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    $('.play-icon').on('click', function() {
        toggleSong()
    });
    $('body').on('keypress', function(event) {
                if (event.keyCode == 32) {
				toggleSong()
				}
            });
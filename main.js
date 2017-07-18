//--------------------------looping -------------------------
//----------repeat   loop----------------------
//-----------shuffle  loop--------------- 

var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon

$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});

$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});

function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}

$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,11,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 11) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})

/*------------------------------------------------------*/



	var songs=[{
				'name':'car nachdi',
				'artist':'Bohemia',
				'album':'Car nachdi',
				'duration':'03:25',
				'fileName':'song1.mp3',
				'image':'song1.jpg'
					},	
					{
				'name':'Bebe Di Pasand',
				'artist':'Jordan Sandhu',
				'album':'Bebe Di Pasand - Single',
				'duration':'03:48',
				'fileName':'song2.mp3',
				'image':'song2.jpg'
					},	
					{
				'name':'Colour Black',
				'artist':'Gama Chahal',
				'album':'Colour Black ',
				'duration':'03:41',
				'fileName':'song3.mp3',
				'image':'song3.jpg'
					},
						
						{
				'name':'Hu Haal Ve',
				'artist':'Ammy Virk',
				'album':'Teshan',
				'duration':'02:34',
				'fileName':'song4.mp3',
				'image':'song4.jpg'
					},
					
					{
				'name':'Muchh',
				'artist':'Dilpreet Dhillon',
				'album':'Muchh - Single',
				'duration':'03:46',
				'fileName':'song5.mp3',
				'image':'song5.jpg'
					},
					
					{
				'name':'Shades of Black',
				'artist':'Fateh',
				'album':'Shades of Black',
				'duration':'04:08',
				'fileName':'song6.mp3',
				'image':'song6.jpg'
					},

				{
				'name':'HiGh Rated GaBru',
				'artist':'Guru Randhawa',
				'album':'High Rated Gabru',
				'duration':'03:34',
				'fileName':'song7.mp3',
				'image':'song7.jpg'
				},
					
			
				{
				'name':'Paani',
				'artist':'Yuvraj Hans',
				'album':'Paani',
				'duration':'03:06',
				'fileName':'song8.mp3',
				'image':'song8.jpg'
				},	
				
				{
				'name':'Soch',
				'artist':'Hardy Sandhu',
				'album':'Soch',
				'duration':'05:47',
				'fileName':'song9.mp3',
				'image':'song9.jpg'
				},
				
				{
				'name':'Gangland',
				'artist':'Mankirt Aulakh ',
				'album':'Gangland',
				'duration':'02:48',
				'fileName':'song10.mp3',
				'image':'song10.jpg'
				},
				
					{
				'name':'Dill Tutda',
				'artist':'Jassi Gill',
				'album':'Dill Tutda',
				'duration':'04:00',
				'fileName':'song11.mp3',
				'image':'song11.jpg'
				},
				
					]

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
			
//////////////////////////////////////////////////////////////////////////////////////////////
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



//................................................................

						function changeCurrentSongDetails(songObj) {
							$('.current-song-image').attr('src','img/' + songObj.image)
							$('.current-song-name').text(songObj.name)
							$('.current-song-album').text(songObj.album)
						}


		
			



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
			
			function pbf(){
				var elm = document.querySelector('audio');
				var cur = elm.currentTime;
				var dur = elm.duration;
				var percentage = (cur/dur)*100;
				$("#progress-filled").css('width',percentage + "%");
				
			}
			
			
//clike event bnaya jo song pe clike krne pr play or pause ho..			
			function addSongNameClickEvent(songObj,position) {
				
					var id = '#song' + position;
					var songName = songObj.fileName;
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
				changeCurrentSongDetails(songObj);
				}
				});
				}
									
			
			
			
				window.onload = function() {
				changeCurrentSongDetails(songs[0]);
				
				
					
						  for(var i=0; i<songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1)
    
	}
						
						updateCurrentTime(); 
						setInterval(function() {
						updateCurrentTime();
							pbf();
			 
						},1000);
					 $('#songs').DataTable({
						 scrollY:"300px",
						 scrollCollapse:true,
						paging: false
						
						
						
						
					});
           
             
			 }				
		$('.fa fa-step-forward').on('click',function(){
					
					var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
       
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
					
					
					
				})

	
			 

	
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
                  var target = event.target;
			if (event.keyCode == 32 && target.tagName !='INPUT')
		{
				toggleSong()
				}
            });
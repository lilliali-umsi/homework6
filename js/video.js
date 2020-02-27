var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume*100+"%";
	console.log("Play Video");
	console.log(video);

	// console.log(video);
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
  	var vid =document.querySelector("#myVideo");
  	vid.playbackRate *= .8;
  	console.log("Speed is "+ video.playbackRate);
 } 

function increaseSpeed() {


var vid =document.querySelector("#myVideo");
  	vid.playbackRate *=  1.25;
console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
console.log("Current location is "+ video.currentTime);
var vid =document.querySelector("#myVideo");
  	vid.currentTime +=  60;
if(vid.ended){
	vid.currentTime = 0;
}
} 

function mute() { 
  	if(video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  		document.querySelector("#mute").innerHTML = "Mute";
  	}else{
      	console.log("Changing to Muted");
      	video.muted = true;
      	document.querySelector("#mute").innerHTML = "Unmute";
  	}
 }

function changeVolume() {
	
	let slider = document.querySelector("#volumeSlider");
	video.volume = slider.value / 100;
	console.log("Volume is " + video.volume*100);
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume*100+"%";
}
       

function gray() { 
	document.getElementById("myVideo").classList.add("grayscale");
	console.log("In grayscale")

}

function color() {
	document.getElementById("myVideo").classList.remove("grayscale");
	console.log("In color") 
}
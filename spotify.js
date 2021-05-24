let play= document.querySelector("#play");
let playSong= false;
let track= document.querySelector("#myAudio");




function dropdown(){
document.getElementById("dropdown").classList.toggle("show");  
}

// function audio1()
// {
    
//     document.getElementById("ado1").play();
// }

// function myAudio(){

//    document.getElementById("ado1").pause();
// }

function audio1()  // switch to play audio
{
    if(playSong === false)
    { track.play();
        playSong=true;
        console.log(playSong);
        document.getElementById("play").innerHTML= `<i class="fas fa-pause"></i>`;
        document.querySelector(".hover-play").innerHTML=`<i class="fas fa-pause"></i>`;
        // changes the icons on play button 

    }

    else {
    track.pause();
    playSong=false;
    console.log(playSong);
    document.getElementById("play").innerHTML= `<i class="fas fa-play"></i>`;
    document.querySelector(".hover-play").innerHTML=`<i class="fas fa-play"></i>`;
    }
}

let slider= document.querySelector("#slide");
let output= document.querySelector("#value");

setInterval(function(){output.innerHTML= slider.value;},20);


slider.oninput = function(){
    output.innerHTML= slider.value;
}
function change_duration(){
slider_position = track.duration * (slider.value / 10000);
track.currentTime = slider_position;
}

function range_slider(){
let position = 0;
    
    // update slider position
    if(!isNaN(track.duration)){
       position = track.currentTime * (10000 / track.duration);
       slider.value =  position;
      }
    
   
   // function will run when the song is over
   if(track.ended){
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
       if(autoplay==1){
           index_no += 1;
           load_track(index_no);
           playsong();
       }
    }
 }
 setInterval(function(){ range_slider(); }, 200);
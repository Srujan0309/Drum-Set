var doc = document.querySelectorAll("button.drum");
for (var i = 0; i < doc.length; i++) {
    
    doc[i].addEventListener("click",function()
{
    var button=this.textContent;
    makesound(button);
    animation(button);
} );
   
}
document.addEventListener("keydown",function(event)
{
    makesound(event.key);
    animation(event.key);
});

function makesound(key) {
   
   switch(key)
   {
        case 'w':var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
        case 'a':var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
        case 's':var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;  
        case 'd':var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break; 
        case 'j':var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break; 
        case 'k':var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
        case 'l':var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
        default: console.log(button);
   }
}
function animation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed"); 
        setTimeout(function(){
                activeButton.classList.remove("pressed"),100
        })
    }
    
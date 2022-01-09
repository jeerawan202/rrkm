window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("47.mp3");

    img.addEventListener('mousedown',function(){
        increaseScore();
        img.src='main.png';
        audio.play();
});

    img.addEventListener('mouseup',function(){
       img.src ="rirakkuma.png.crdownload";
       audio.play();
});
 function increaseScore(){
     score++;
     count.innerHTML = score;
 }
}
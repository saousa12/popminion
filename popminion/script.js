window.onload = function(){
    var img = document.getElementById("minion1");
    var count = document.getElementById("score");
    var score =0;
    var audio = new Audio("QKTA234-pop.mp3");

    img.addEventListener('mousedown',function (){
        increaseScore();
        img.src = 'minion2.png';
        audio.play();
    });

    img.addEventListener('mouseup',function(){
        img.src = 'minion1.png';
        audio.play();

    });
    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}
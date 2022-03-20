 // make ball
var ball = document.querySelector('.ball');
document.onmousemove = function (e) {
    ball.style.display = 'block';
    var radius = ball.offsetWidth >> 1;
    e = e || window.event;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 滾動距離
    var x = e.clientX;
    ball.style.left = x - radius + 'px';
    var y = e.clientY + scrollTop;
    ball.style.top = y - radius + 'px';
}    
    
//
$("a").mouseover(function() {
    $(".ball").height('75px');
    $(".ball").width('75px');
})
$("a").mouseout(function() {
    $(".ball").height('30px');
    $(".ball").width('30px');
})
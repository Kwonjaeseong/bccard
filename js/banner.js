//공지사항 slide

timer();
var current = 0;
var $interval;

function timer() {
  var $interval = setInterval(function () {
    slide();
  }, 4000);
}

function slide() {
  $(".slides2").animate({ left: "-100%" }, 1000, function () {
    $(".slides2").css({ left: 0 });
    $(this).append($(".slides2 > li").eq(0));
  });
  current++;
  if (current == 2) current = 0;
}

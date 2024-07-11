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
  $(".slides").animate({ left: "-100%" }, 1000, function () {
    $(this).append($("li").eq(0));
    $(".slides").css({ left: 0 });
  });
  current++;
  if (current == 2) current = 0;
}

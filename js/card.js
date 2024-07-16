// 추천카드 슬라이더 bx slider 사용//
var itv_recocard = null;
var recocard_flag = true;
$(".reco_card  .slide2").bxSlider({
  minSlides: 4,
  maxSlides: 5,
  slideWidth: 257,
  moveSlides: 1,
  pager: false,
  auto: false,
  touchEnabled: false,
  //, autoStart : false
  //, autoDelay : 0
  //, pause : 5000
  autoControls: true,
  onSliderLoad: function (curIdx) {
    // prev, next 버튼 이벤트
    $(".reco_card .btn-prev").on("click", function () {
      if (recocard_flag) {
        $(".reco_card .bx-prev").click();
      }
    });
    $(".reco_card .btn-next").on("click", function () {
      if (recocard_flag) {
        $(".reco_card .bx-next").click();
      }
    });

    // 오토 플레이
    clearInterval(itv_recocard);
    itv_recocard = null;
    itv_recocard = setInterval(function () {
      $(".reco_card .btn-next").click();
    }, 5000);

    // stop, start 버튼 이벤트
    $(".reco_card .btn-stop").on("click", function () {
      var $me_stop = $(this);
      if ($me_stop.hasClass("on")) {
        clearInterval(itv_recocard);
        itv_recocard = null;
        itv_recocard = setInterval(function () {
          $(".reco_card .btn-next").click();
        }, 5000);
        $me_stop.text("멈춤");
        $me_stop.removeClass("on");
      } else {
        clearInterval(itv_recocard);
        itv_recocard = null;
        $me_stop.addClass("on");
        $me_stop.text("시작");
      }
    });

    // 포커스, 마우스 오버시 이벤트
    $(".reco_card .slide2")
      .on("focusin mouseenter", function () {
        var $btn_ss = $(".reco_card .btn-stop");
        if ($btn_ss.hasClass("on")) {
        } else {
          $(".reco_card .btn-stop").click();
        }
      })
      .on("focusout mouseleave", function () {
        var $btn_ss = $(".reco_card .btn-stop");
        if ($btn_ss.hasClass("on")) {
          $(".reco_card .btn-stop").click();
        } else {
        }
      });
  },
  onSlideBefore: function (silde, oldIdx, newIdx) {
    recocard_flag = false;
  },
  onSlideAfter: function (slide, oldIdx, newIdx) {
    recocard_flag = true;
  },
});

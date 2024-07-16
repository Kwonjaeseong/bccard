//상단 서브슬라이드 flex slider 사용//

// 탭 클릭 시 기본 동작(링크 이동) 방지
$(".tabslide li a").on("click", function (e) {
  e.preventDefault();
});

// 각 슬라이드 항목에 인덱스 클래스 추가
$("#subvisual .visualslider .slides > li").each(function (idx) {
  $(this).addClass("sub_slide_idx_" + idx);
});

// 슬라이드 항목 개수 가져오기
var subVisual_slide_cnt = $("#subvisual .visualslider .slides > li").length; //2018-06-01

// FlexSlider 초기화
$("#subvisual .visualslider").flexslider({
  animation: "fade", // 애니메이션 효과
  slideshowSpeed: 5000, // 슬라이드쇼 속도 (밀리초)
  animationSpeed: 1000, // 애니메이션 속도 (밀리초)
  directionNav: true, // 이전/다음 네비게이션 버튼
  pausePlay: true, // 일시정지/재생 버튼
  before: function (s) {
    // 슬라이드 전환 전 이벤트
    $(".tabslider li")
      .eq(s.animatingTo) // 전환될 슬라이드 인덱스
      .addClass("on") // 현재 슬라이드에 on 클래스 추가
      .siblings() // 다른 슬라이드
      .removeClass("on"); // on 클래스 제거
  },
  start: function (s) {
    // 슬라이더 시작 시 이벤트
    // 탭 클릭 이벤트 핸들러
    $(".tabslider li a").on("click", function (e) {
      e.preventDefault(); // 기본 동작 방지
      var slideIndex = $(".tabslider li a").index($(this)); // 클릭한 탭의 인덱스 가져오기
      $("#subvisual .visualslider").flexslider(slideIndex); // 해당 인덱스 슬라이드로 전환
    });
  },
});

// FlexSlider의 슬라이더 객체에 접근하기 위한 코드
var flexSlider = $("#subvisual .visualslider").data("flexslider");

// 탭 클릭 시 슬라이드 전환 기능
$(".tabslider li a").on("click", function (e) {
  e.preventDefault(); // 기본 동작 방지
  var slideIndex = $(".tabslider li a").index($(this)); // 클릭한 탭의 인덱스 가져오기
  flexSlider.flexAnimate(slideIndex); // 해당 인덱스 슬라이드로 전환
});

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

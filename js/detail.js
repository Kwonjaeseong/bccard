// view open & close

$(".read .item .tit, .read .item .trigger").click(function () {
  if ($(this).parent().find(".view").css("display") == "block") {
    $(this).parent().find(".view").hide();
    $(this).parent().find(".more_btn").css("display", "block");
    $(this).parent().find(".close_btn").css("display", "none");
  } else {
    $(this).parent().find(".view").show();
    $(this).parent().find(".close_btn").css("display", "block");
    $(this).parent().find(".more_btn").css("display", "none");
  }
});

// 상세보기 접고 펴기

$(".cardspitem .tit").click(function () {
  if ($(this).parent().find(".sp_view").css("display") == "block") {
    $(this).parent().find(".sp_view").hide();
    $(this).parent().find(".more_btn").css("display", "block");
    $(this).parent().find(".close_btn").css("display", "none");
  } else {
    $(this).parent().find(".sp_view").show();
    $(this).parent().find(".close_btn").css("display", "block");
    $(this).parent().find(".more_btn").css("display", "none");
  }
});

$(".carddgitem .tit").click(function () {
  if ($(this).parent().find(".dg_view").css("display") == "block") {
    $(this).parent().find(".dg_view").hide();
    $(this).parent().find(".more_btn").css("display", "block");
    $(this).parent().find(".close_btn").css("display", "none");
  } else {
    $(this).parent().find(".dg_view").show();
    $(this).parent().find(".close_btn").css("display", "block");
    $(this).parent().find(".more_btn").css("display", "none");
  }
});

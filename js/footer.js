// footer center
var chk_btnCenter = true;
$(".btncenter > a").bind({
    "click": function () {
        if (chk_btnCenter == true) {
            $(".btncenter > a").css("background-position", "left top");
            $(".btncenter ul").show();
            $(".btncenter .hidemenu").attr('title', '비씨카드 발급기관 펼쳐짐');
            chk_btnCenter = false;

            $(".btnfamily > a").css("background-position", "left bottom");
            $(".contentfamily").hide();
            chk_familySite = true;
        } else {
            $(".btncenter > a").css("background-position", "left bottom");
            $(".btncenter ul").hide();
            $(".btncenter .hideMenu").attr('title', '비씨카드 발급기관 닫힘');
            chk_btnCenter = true;
        }
    }

});

// footer family
var chk_familySite = true;
$(".btnfamily > a").bind({
    "click": function () {
        if (chk_familySite == true) {
            $(".btnfamily > a").css("background-position", "left top");
            $(".contentfamily").show();
            $(".btnfamily .hidemenu").attr('title', 'Family Site 펼쳐짐');
            chk_familySite = false;

            $(".btncenter > a").css("background-position", "left bottom");
            $(".btncenter ul").hide();
            chk_btnCenter = true;
        } else {
            $(".btnfamily > a").css("background-position", "left bottom");
            $(".contentfamily").hide();
            $(".btnfamily .hidemenu").attr('title', 'Family Site 닫힘');
            chk_familySite = true;
        }
    }
});


//main

const sliderWrap = document.querySelector(".slider_wrap");
const sliderImg = sliderWrap.querySelector(".slider_img");
const slider = sliderWrap.querySelectorAll(".slider");

let currentIndex = 0; // 현재 보이는 이미지
let sliderCount = slider.length; // 이미지 갯수
let sliderInterval = 5000; // 이미지 변경 간격 시간

setInterval(() => {
  // 0 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0  // currentIndex
  // 1 2 0 1 2 0 1 2 0 1 2 0 1 2 0 1  // nextIndex
  let nextIndex = (currentIndex + 1) % sliderCount;

  slider[currentIndex].style.opacity = "0";
  slider[nextIndex].style.opacity = "1";

  currentIndex = nextIndex;

  console.log(currentIndex);
}, sliderInterval);

// slider[0].style.opacity = "0"; // 첫번째 이미지를 안보이게
// slider[1].style.opacity = "1"; // 두번째 이미지를 보이게

// slider[1].style.opacity = "0"; // 두번째 이미지를 안보이게
// slider[2].style.opacity = "1"; // 세번째 이미지를 보이게

// slider[2].style.opacity = "0"; // 세번째 이미지를 안보이게
// slider[0].style.opacity = "1"; // 네번째 이미지를 보이게

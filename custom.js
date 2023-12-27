// const img = document.querySelector("img");

// // https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg

// const a = 10;

// const b = a.toString().padStart(4, "0");

// console.log(b);

//hero 섹션 높이 지정: 헤더 높이를 제외한 높이
const headerHeight = document.querySelector("header").offsetHeight;
console.log(headerHeight);

const heroSection = document.querySelector(".section-01");

heroSection.style.marginTop = headerHeight + 50 + "px";

// GSAP 효과 지정
const imgObj = document.querySelector("#hero-lightpass");
const mainText = document.querySelector(".main-elem");

let t10 = gsap.timeline();
t10
  .add("start0") //시작 지점 지정
  .fromTo(imgObj, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0")
  .fromTo(mainText, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0");

// creating a loading animation when website is loading
function loadingAnimation() {
  setTimeout(() => {
    console.log("loading function is called");
    document.querySelector(".navigationBar").style.transform =
      "translateY(0px)";
  }, 130);

  setTimeout(() => {
    document.querySelector(".introFirstText").classList.add("rollTheIntro");
  }, 260);
  setTimeout(() => {
    document.querySelector(".introSecondText").classList.add("slideIntroText");
  }, 500);
  setTimeout(() => {
    document
      .querySelector(".IntroWatch")
      .style.setProperty("transform", "translateX(0%)");
  }, 550);
  setTimeout(() => {
    document
      .querySelector(".bottomIntroText")
      .style.setProperty("opacity", "1");
    document
      .querySelector(".bottomIntroText")
      .style.setProperty("transform", "translateY(0px)");
  }, 1000);
}

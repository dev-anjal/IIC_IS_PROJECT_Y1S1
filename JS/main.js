const procuctSecton = document.querySelector("#Products");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      console.log("Product section is visible");
    }
  },
  {
    threshold: 0.5,
  }
);
observer.observe(procuctSecton);

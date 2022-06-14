const tlFirstPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-one",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false
  }
});

const tlSecondPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-two",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false
  }
});

const tlThirdPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".page-three",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false
  }
});

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from("#hero img", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
gsap.from("#hero h1", { scale: 0.8, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
gsap.from("#hero p", { y: 20, opacity: 0, duration: 1, delay: 0.6 });
gsap.from("#hero .btn", { duration: 1,
  backgroundColor: "red",
  y: 0,
  opacity: 1});

// Scroll Animations for sections
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec.children, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
  });
});

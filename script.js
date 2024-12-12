gsap.from("h1", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
gsap.from(".Characters_pics img", { duration: 1, opacity: 0, stagger: 0.2 });
document.getElementById("easter-egg").addEventListener("click", () => {
  alert("Surprise! You're a Grade 1 Sorcerer!");
});

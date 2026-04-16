window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.4s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 400);

  }, 600);
});

const cards = document.querySelectorAll(".testimonial-card");
let index = 0;

setInterval(() => {
  cards.forEach(card => card.style.display = "none");
  cards[index].style.display = "block";
  index = (index + 1) % cards.length;
}, 3000);
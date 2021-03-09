const icons = document.querySelectorAll(".section-1-icons i");
let currentIconsIndex = 0;
//console.log(icons.length);

setInterval(() => {
  alternateIcons(currentIconsIndex++, icons.length);
}, 4000);

function alternateIcons(index, mod) {
  icons[index % mod].classList.remove("change");
  icons[(index + 1) % mod].classList.add("change");
}

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menuButton.classList.toggle("change");
});

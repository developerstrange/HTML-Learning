// Hover animation for nav items
const menuItems = document.querySelectorAll("header ul li");
menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05)";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});

// Animate input field on load
const inputField = document.querySelector("main input");
inputField.style.opacity = 0;
inputField.style.transform = "translateY(20px)";
window.addEventListener("load", () => {
  setTimeout(() => {
    inputField.style.transition = "all 0.6s ease";
    inputField.style.opacity = 1;
    inputField.style.transform = "translateY(0)";
  }, 400);
});

// Typing effect for placeholder
const placeholderText = "Search for restaurant, cuisine or dish";
let index = 0;

function animatePlaceholder() {
  if (index <= placeholderText.length) {
    inputField.setAttribute("placeholder", placeholderText.slice(0, index++));
    setTimeout(animatePlaceholder, 80);
  } else {
    index = 0;
    setTimeout(animatePlaceholder, 2000);
  }
}

animatePlaceholder();

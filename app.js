// Tabs
const buttons = [
  document.querySelector("#firstBtn"),
  document.querySelector("#secondBtn"),
  document.querySelector("#thirdBtn"),
  document.querySelector("#fourthBtn"),
];

// content
const content = [
  document.querySelector("#firstContent"),
  document.querySelector("#secondContent"),
  document.querySelector("#thirdContent"),
  document.querySelector("#fourthContent"),
];

// functions
function active(btn, content) {
  btn.classList.remove("text-gray-500", "border-transparent");
  btn.classList.add("text-black", "border-black");
  content.classList.remove("hidden");
}

function notActive(btn, content) {
  btn.classList.remove("text-black", "border-black");
  btn.classList.add("text-gray-500", "border-transparent");

  content.classList.add("hidden");
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button, i) => {
      if (i === index) {
        active(button, content[i]);
      } else {
        notActive(button, content[i]);
      }
    });
  });
});


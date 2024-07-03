// Inplement random coloring changing effect while clicking
const changeColorElements = document.querySelectorAll(".heading");

changeColorElements.forEach((element) => {
  element.addEventListener("click", function () {
    const getRandomColor = function () {
      // Generate hex random color code
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    // Setting the background color
    element.style.backgroundColor = getRandomColor();
  });
});

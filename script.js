document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn"),
    wrapper = document.querySelector(".container"),
    colorSpan = document.querySelector("#hex-code"),
    hexArr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

  function randomHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexArr.length);
      hexColor += hexArr[randomIndex];
    }
    return hexColor;
  }

  button.addEventListener("click", () => {
    wrapper.style.backgroundColor = randomHex();
    colorSpan.innerText = randomHex();
  });
});

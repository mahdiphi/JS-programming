let main = document.getElementsByClassName("main")[0];
let light = document.getElementsByClassName("light");

light[0].addEventListener("click", () => {
  main.style.backgroundColor = "red";
});

light[1].addEventListener("click", () => {
  main.style.backgroundColor = "yellow";
});

light[2].addEventListener("click", () => {
  main.style.backgroundColor = "green";
});

// // by chatGPT help: 
// const main = document.querySelector(".main");
// const lights = document.querySelectorAll(".container div");

// lights.forEach(light => {
//     light.addEventListener("click", () => {
//         main.style.backgroundColor = light.classList[0]; 
//     });
// });

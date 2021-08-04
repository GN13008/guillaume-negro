const btn = document.querySelector("#clickme");
btn.addEventListener("click", (event) => {
  // Do something (callback)
  // event.currentTarget.classList.add("disabled");
  // event.currentTarget.innerText = "Bingo!";
  console.log("hello");
  // audio.play();
});

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
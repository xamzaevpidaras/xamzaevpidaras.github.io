document.getElementById("showButton").addEventListener("click", function() {
  this.style.display = "none";
  document.querySelector(".overlay").classList.add("show-overlay");
});

document.getElementById("backButton").addEventListener("click", function() {
  document.querySelector(".overlay").classList.remove("show-overlay");
  document.getElementById("showButton").style.display = "block";
});

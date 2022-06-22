var coll = document.getElementsByClassName("collapsible");
var croix = document.getElementById("closeListCollapse");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      croix.setAttribute("style", "transform: rotate(45deg);");
    } else {
      content.style.display = "block";
      croix.setAttribute("style", "transform: rotate(0deg);");
    }
  });
}
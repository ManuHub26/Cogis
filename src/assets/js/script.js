var coll = document.getElementsByClassName("collapsible");


for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var croix = this.firstElementChild;
    if (content.style.opacity === "1") {
      content.style.opacity = "0";
      croix.setAttribute("style", "transform: rotate(45deg); transition: transform 200ms ease-out;");
    } else {
      content.style.opacity = "1";
      croix.setAttribute("style", "transform: rotate(0deg);  transition: transform 200ms ease-out;");
    }
  });
}
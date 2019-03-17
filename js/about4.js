var coll = document.getElementsByClassName("question");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.display === "block") {
      answer.display = "none";
    } else {
      answer.display = "block";
    }
  });
}

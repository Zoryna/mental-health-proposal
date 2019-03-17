var ques = document.getElementsByClassName("question");
var i;

for (i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}

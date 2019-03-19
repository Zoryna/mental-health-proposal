var ques = document.getElementsByClassName("question");
var i;

for (i = 0; i < ques.length; i++)
{
  ques[i].addEventListener
  ("click", function()
  {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

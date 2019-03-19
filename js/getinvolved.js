var sec = document.getElementsByClassName("section");
var i;

for (i = 0; i < sec.length; i++)
{
  sec[i].addEventListener
  ("click", function()
  {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

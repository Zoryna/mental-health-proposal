function submitFunction()
{
  var n = document.getElementById("nameText").value;
  var e = document.getElementById("emailText").value;
  var o = document.getElementById("orgText").value;
  var s = document.getElementById("sizeText").value;
  document.getElementById("name").innerHTML = n;
  document.getElementById("email").innerHTML = e;
  document.getElementById("org").innerHTML = o;
  document.getElementById("size").innerHTML = s;
}

function notification() {
  alert("Your application has been submitted! Your submitted information will be displayed below. Thank you for applying!");
}

function submitFunction()
{
  var n = document.getElementById("nameText").value;
  var e = document.getElementById("emailText").value;
  var s = document.getElementById("subText").value;
  var m = document.getElementById("messText").value;
  document.getElementById("name").innerHTML = n;
  document.getElementById("email").innerHTML = e;
  document.getElementById("subject").innerHTML = s;
  document.getElementById("message").innerHTML = m;
}

function notification() {
  alert("Your email has been sent! Your email will be displayed below. Thank you! You will receive a response in 3-5 business days");
}

var data1 = localStorage.getItem("data1");
var data2 = localStorage.getItem("data2");
var data3 = localStorage.getItem("data3");
var data4 = localStorage.getItem("data4");
var data5 = localStorage.getItem("data5");
var data6 = localStorage.getItem("data6");
var data7 = localStorage.getItem("data7");

function SimpanData() {
  var fullname = document.getElementById("fullname").value;
  var role = document.getElementById("role").value;
  var avail = document.getElementById("avail").value;
  var age = document.getElementById("age").value;
  var loc = document.getElementById("loc").value;
  var exp = document.getElementById("exp").value;
  var email = document.getElementById("email").value;

  localStorage.setItem("data1", fullname);
  localStorage.setItem("data2", role);
  localStorage.setItem("data3", avail);
  localStorage.setItem("data4", age);
  localStorage.setItem("data5", loc);
  localStorage.setItem("data6", exp);
  localStorage.setItem("data7", email);

  document.getElementById("new_fullname").innerHTML = fullname;
  document.getElementById("new_role").innerHTML = role;
  document.getElementById("new_avail").innerHTML = avail;
  document.getElementById("new_age").innerHTML = age;
  document.getElementById("new_loc").innerHTML = loc;
  document.getElementById("new_exp").innerHTML = exp;
  document.getElementById("new_email").innerHTML = email;
}

function TampilkanData() {
  localStorage.getItem("storedItem");
  document.getElementById("new_fullname").innerHTML = data1;
  document.getElementById("new_role").innerHTML = data2;
  document.getElementById("new_avail").innerHTML = data3;
  document.getElementById("new_age").innerHTML = data4;
  document.getElementById("new_loc").innerHTML = data5;
  document.getElementById("new_exp").innerHTML = data6;
  document.getElementById("new_email").innerHTML = data7;
}

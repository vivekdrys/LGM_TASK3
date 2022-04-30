var x, y, z, w, u;
var t = 1;
var a = 0;
function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(t);
  x = document.getElementById("fname").value;
  y = document.getElementById("email").value;
  z = document.getElementById("age").value;
  w = document.getElementById("sex").value;
  u = document.getElementById("number").value;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  cel1.innerHTML = x;
  cel2.innerHTML = y;
  cel3.innerHTML = z;
  cel4.innerHTML = w;
  cel5.innerHTML = u;

  t++;
  a++;
}

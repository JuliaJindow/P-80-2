function Get_Para_1() {
    var inputs = [];
  for (var i  = 1; i <= 6; i++) {
      inputs.push(document.getElementById("para1_input_box_" + i).value);
  }
  var join = inputs.join(". ")
  document.getElementById("show_para1").innerHTML = join;
}


function Get_Para_2() {
    var inputs = [];
  for (var i  = 1; i <= 6; i++) {
      inputs.push(document.getElementById("para2_input_box_" + i).value);
  }
  var join = inputs.join(". ")
  document.getElementById("show_para2").innerHTML = join;
}
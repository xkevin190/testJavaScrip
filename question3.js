function myFunction(value) {
  var str = value.toString();
  var char = "-";
  var newchar = "";
  str = str
    .split("(")
    .join(newchar)
    .split(")")
    .join(newchar)
    .split("-")
    .join(newchar);

  var res =
    str.substring(0, 3) +
    char +
    str.substring(3, 6) +
    char +
    str.substring(6, 10);

  return res;
}

console.log(myFunction("(234)567-8900"));

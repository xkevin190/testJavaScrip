const files = [
  "/src/common/api.js",
  "/src/common/preferences.js",
  "/src/styles/main.css",
  "/src/styles/base/_base.scss",
  "/src/assets/apple-touch-icon-57.png"
];

const exclude = ["/src/styles/", "/src/assets/apple-touch-icon-57.png"];

function myFunction() {
  for (var i = 0; i < exclude.length; i++) {
    var choice = exclude[i].trim();
    for (var j = 0; j < files.length; j++) {
      if (files[j].trim() === choice) {
        files.splice(j, 1);
        j--;
      }
    }
  }

  for (var i = 0; i < exclude.length; i++) {
    var choice = exclude[i].trim();
    for (var i = 0; i < files.length; i++) {
      var value = files[i].trim();
      var cut = value.substring(0, choice.length);
      if (cut === choice) {
        files.splice(i, 1);
        i--;
      }
    }
    return files;
  }
}

console.log(myFunction());


// //zadatak

// var elements = document.getElementsByTagName("input");
// var n = elements.length;

// for (var i = 0; i < n ; i++) {
//     elements[i].onclick = function(){
//         console.log("This is element #" + i)
//     }
// }



// resenje

var elements = document.getElementsByTagName("input");
var n = elements.length

for (let i = 0; i < n; i++) {
  elements[i].addEventListener("click", function () {
    console.log("This is element #" + (i + 1));
  });
}
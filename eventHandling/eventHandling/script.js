// window.onload = function () {

// };

//  document.addEventListener('DOMContentLoaded', () => {

//    var btn = document.querySelector('button');
//    btn.addEventListener('click', function () {
//      var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//      document.body.style.backgroundColor = rndCol;
//    })
//  } )
   


// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

 document.addEventListener('DOMContentLoaded', () => {
   var buttons = document.querySelectorAll('button');
   function random(number) {
     return Math.floor(Math.random() * number);
   }
   function bgChange() {
     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
     document.body.style.backgroundColor = rndCol;
   }
   for (let i = 0; i < buttons.length; i++) {
     buttons[i].onmouseover = bgChange;
   }

   window.onkeydown = bgChange;
 }); 


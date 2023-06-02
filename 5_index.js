
let num1 = 0;
let num2 = 0;

let result1 = 0;
let result2 = 2;
let result3 = 3;

let result4 = 0;
let result5 = 2;
let result6 = 3;


 document.getElementById("num1-el").textContent = num1;
 document.getElementById("num2-el").textContent = num2;

 let home = document.getElementById('num1-el');
 let guest = document.getElementById('num2-el');

function test1(){
  
  home.textContent = result1++;
  
}

function test2(){
  result2++
  home.textContent = result2++
  
}

function test3(){
    result3 = result3 + 3;
    home.textContent = result3
}


function test4(){
  result4++
  guest.textContent = result4++;
  
}

function test5(){
  result5++
  guest.textContent = result5++
  
}

function test6(){
    result6 = result6 + 3;
    guest.textContent = result6;
}

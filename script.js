var variant = 11 % 6 + 1;
document.getElementById("variant").innerHTML = variant;

var rez = document.getElementById('var_c');
function calc_click_gipotenysa(){
    var a = document.getElementById('var_a').value;
    var b = document.getElementById('var_b').value;
    if (a <= 0 || b <=0){
        alert("Сторона не може мати від'ємні значення або нуль!");
        rez.innerHTML = 0;  
    }
    else{
        var c = Math.sqrt((a*a)+(b*b));
        rez.innerHTML = c;
    }
}
var rinc = document.querySelector(".rinc");
var rdec = document.querySelector(".rdec");

var ginc = document.querySelector(".ginc");
var gdec = document.querySelector(".gdec");

var binc = document.querySelector(".binc");
var bdec = document.querySelector(".bdec");

var colorbox = document.querySelector(".color-box");

var value = document.querySelector(".rgb-value");

var red=0, green=0, blue=0;


function updateUI(){
    colorbox.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")" ;
    value.textContent = "rgb(" + red + "," + green + "," + blue + ")" ;
}


rinc.addEventListener('click',function(){
    if(red==255)
    {
        alert("Can not exceed on positive side!!!");
    }
    else{
        red=red+1;
    }
    updateUI();
});

rdec.addEventListener('click',function(){
    if(red==0)
    {
        alert("Can not exceed on negative side!!!");
    }
    else{
        red=red-1;
    }
    updateUI();
});


ginc.addEventListener('click',function(){
    if(green==255)
    {
        alert("Can not exceed on positive side!!!");
    }
    else{
        green=green+1;
    }
    updateUI();
});

gdec.addEventListener('click',function(){
    if(green==0)
    {
        alert("Can not exceed on negative side!!!");
    }
    else{
        green=green-1;
    }
    updateUI();
});


binc.addEventListener('click',function(){
    if(blue==255)
    {
        alert("Can not exceed on positive side!!!");
    }
    else{
        blue=blue+1;
    }
    updateUI();
});

bdec.addEventListener('click',function(){
    if(blue==0)
    {
        alert("Can not exceed on negative side!!!");
    }
    else{
        blue=blue-1;
    }
    updateUI();
});
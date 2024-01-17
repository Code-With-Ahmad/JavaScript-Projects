let red = document.getElementById('red'); 
let orange = document.getElementById('orange'); 
let yellow = document.getElementById('yellow'); 
let blue = document.getElementById('blue'); 
let body = document.body; 
red.addEventListener('click', function()
{
body.style.background = "red"
});
blue.addEventListener('click', function()
{
body.style.background = "blue"
});
orange.addEventListener('click', function()
{
body.style.background = "orange"
});
yellow.addEventListener('click', function()
{
body.style.background = "yellow"
});
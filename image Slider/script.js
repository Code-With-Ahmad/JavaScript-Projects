let flag =  0; // It is the current number of slide , It starts with zero
function controller(x) // it receives the value which we gave in the elment (1 or -1)
{
flag = flag + x;


slideShow(flag);
}

function slideShow(num) // num is the number which we gets from the flag
{
    let slides = document.getElementsByClassName('slides');
    for(let i of slides)
    {
        i.style.display = "none"
    }
    if(num == slides.length)
    {
        flag =0;
        num= 0;
    }
   if(num < 0)
   {
    flag = slides.length-1;
    num = slides.length-1;
   }

    slides[num].style.display = "block";
}
slideShow(flag);


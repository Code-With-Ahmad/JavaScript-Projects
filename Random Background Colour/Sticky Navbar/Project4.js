let navbar = document.getElementById('navbar');
window.addEventListener('scroll', function()
{
    if(window.pageYOffset >= 280)
    {
        navbar.classList.add('sticky') // It will add class in the element and we have already apply css in this class
    }

})
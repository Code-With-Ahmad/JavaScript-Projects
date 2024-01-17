// Our JS Code Starts From Here 

function includingLightBox()  // This function will inclue lightbox in the html
{

  let html = '<div id="lightbox"><img src="images/1.jpg" alt="" id="image"><i class="fa fa-close" id="cancel" onclick="closePopUp()"></i><i class="fa fa-arrow-right" alt="" id="right" onclick="next()"></i><i class="fa fa-arrow-left" id="left" onclick="prev()"></i></div>' // Store html in a variable 
   
  let popdiv = document.createElement('div');   // div is created 
  popdiv.innerHTML = html;  // Store the html value in this variable 

  document.body.insertBefore(popdiv , document.body.firstChild)
}

let counter = 0;
let img = document.getElementsByClassName('lb')


function popup ()  // this function contains all the popup elements
{
for(let i = 0 ; i < img.length ; i++) // this loop checks the value of the image source 
{
img[i].addEventListener('click' , function() // this function will works when the user clicks on the particular image
{
  document.getElementById ('lightbox').style.display = 'block';
  document.getElementById ('image').src = this.src;
})



}



includingLightBox()  // includingLightBox function has been called back 
}

function closePopUp() // when the user presses the cancel button then the lighbox will disappear
{
  
  document.getElementById ('lightbox').style.display = 'none';
  document.getElementById ('image').src = "";
}



function next() // it will display the next image
{
  
counter++
if(counter>= img.length)
  {
    counter = 0;
  }
  document.getElementById ('lightbox').style.display = 'block';
  document.getElementById ('image').src = img[counter].src;
  
}



function prev()  // it will display the previous  image
{

  counter--
  if(counter < 0)
    {
      counter =  img.length - 1 ;
    }
    document.getElementById ('lightbox').style.display = 'block';
    document.getElementById ('image').src = img[counter].src;
}

document.body.addEventListener('click' , function()  //It will hide the left arrow at first image
{
  if(counter == 0)
  {
    document.getElementById('left').style.display='none'
  }
  else
  {
    document.getElementById('left').style.display='block'
  }
 
})


document.body.addEventListener('click' , function()  //It will hide the right arrow at first image
{
if(counter == img.length-1)
{
  document.getElementById('right').style.display='none'
}
else
{
  document.getElementById('right').style.display='block'
}

})


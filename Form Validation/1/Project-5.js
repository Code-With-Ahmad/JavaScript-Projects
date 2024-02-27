let a = document.getElementById('name1');
let b = document.getElementById('pas');
let flag;
function validateForm()
{
  if(a.value == "")
  {
    document.getElementById('u-error').innerHTML = "Username is Empty";
    flag = 0;
  }
  else if(a.value.length < 3)
  {
    document.getElementById('u-error').innerHTML = "Username Should Contain Atleast 3 Characters";
    flag = 1;
  }
  else
  {
    document.getElementById('u-error').innerHTML = "";
  }
   if(b.value == "")
   {
     document.getElementById('p-error').innerHTML = "Password is Empty";
     flag = 0;
   }
   else if(b.value.length < 3)
   {
     document.getElementById('p-error').innerHTML = "Password Should Contain Atleast 3 Characters";
     flag = 0;
   }
   else
   {
    document.getElementById('p-error').innerHTML = "";
    flag = 1;
   }
   if(flag)
   {
    if(a.value == "" || a.value.length < 3)
    {
      if(a.value == "")
      {
        document.getElementById('u-error').innerHTML = "Username is Empty";
       
      }
      else
      {
        document.getElementById('u-error').innerHTML = "Username Should Contain Atleast 3 Characters";
        
      }
      return false;
    }
    else
    {
      alert('Your form has been submitted successfully')
      return true;
    }
   }
   else
   {
    return false;
   }
   

   
  
    
   

}
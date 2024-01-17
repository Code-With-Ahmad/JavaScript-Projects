let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
cel.addEventListener('input',function()
{
    let c = this.value; // It wills store the input value
    let f = (c * 9/5) + 32; // formula To convert Celsius into fah
    if(!Number.isInteger(f)) // It will works if the value is in decimal
    {
      f = f.toFixed(2); // It will displays only two decimal letters
    }
    fah.value = f; // The value will be displayed in fah input
})
fah.addEventListener('input',function()
{
    let f = this.value; // It wills store the input value
    let c = (f - 32 ) * 5/9;// formula To convert Celsius into fah
    if(!Number.isInteger(c)) // It will works if the value is in decimal
    {
  c = c.toFixed(2); // It will displays only two decimal letters
    }
    cel.value = c; //The value will be displayed in cel input
})


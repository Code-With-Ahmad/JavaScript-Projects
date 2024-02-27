let word = document.getElementById('word');
let char = document.getElementById ('char');
let c = document.getElementById('t');
c.addEventListener('input', function()
{
    let text1 = this.value; // it will stores the value
    let text = this.value.replace(/\s+/g, '') ; // Remove white spaces

    let char1 = text.length; // This will store length of the character
    
    char.innerHTML = char1; // This will replace the content by length without spaces

    let trimmed = text1.trim(); // it will remove white spaces
    let splitted = trimmed.split(' '); // This will store string as an array
    let filtered = splitted.filter(function(e)
    {
        return  e != ""; // This will return value without any spaces 
    })
    word.innerHTML = filtered.length // This will output the length
})
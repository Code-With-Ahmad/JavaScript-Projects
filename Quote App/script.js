document.addEventListener("DOMContentLoaded", () => {
  randomQuote();
});
document.querySelector("#btn").addEventListener("click", () => {
  randomQuote();
});

async function randomQuote() {
  let data = await fetch("https://api.quotable.io/random");
  let quote = await data.json();
  document.getElementById("blockquote").innerHTML = `" ${quote.content} "`;
  document.getElementById("Author").innerHTML = quote.author;
}

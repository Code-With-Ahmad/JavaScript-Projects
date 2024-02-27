let search_box = document.querySelector("#search-box");
let submitBtn = document.querySelector("#submitbtn");
let search_result = document.querySelector("#search-result");
let per_page = 12;
let page = 1;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  search_result.innerHTML = "";
  loadImages();
});

async function loadImages() {
  let keyword = search_box.value;

  let APIKey = "UnAOLSFSGK5YAbLXjbX-UetE8-7MDxVGjHqWtWx2mrk";
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${APIKey}&per_page=${per_page}`;
  let response = await fetch(url);
  let data = await response.json();
  let results = data.results;

  console.log(data);
  results.map((result) => {
    let img = document.createElement("img");
    img.setAttribute("loading", "lazy");
    img.src = result.urls.small;
    img.title = result.alt_description;
    img.alt = result.alt_description;
    let a = document.createElement("a");
    a.href = result.links.html;
    a.target = "_blank";
    a.appendChild(img);
    search_result.appendChild(a);
  });

  if (search_result.innerHTML !== "") {
    document.querySelector("#showMoreBtn").style.display = "block";
    console.log("hi");
  }
  if (data.total == 0) {
    document.querySelector("#showMoreBtn").style.display = "none";
    search_result.innerHTML = `<h1>No Record Found</h1>`;
  }
}
search_box.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    loadImages();
  }
});

document.querySelector("#showMoreBtn").addEventListener("click", () => {
  page++;

  loadImages();
});

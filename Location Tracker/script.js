let btn = document.querySelector(".btn");
let fulladdress = document.querySelector(".address");
let address = document.querySelector(".address-area");

async function getUserCurrentAddress(longitude, latitude) {
  let query = `${longitude} , ${latitude}`;
  const url = `https://api.opencagedata.com/geocode/v1/json`;
  const APIkey = `4bcfad7af1074422a25c2e0ff2797a5c`;
  const ApiURL = `${url}?key=${APIkey}&q=${query}&pretty = 1`;

  try {
    const response = await fetch(ApiURL);
    const data = await response.json();

    const {
      country,
      district,
      municipality,
      neighbourhood,
      suburb,
      village,
      state,
    } = data.results[0].components;

    address.innerHTML = `Full address : <br/> Neighbourhood :  ${neighbourhood} , <br/>
     Municipality : ${municipality} , <br/>
     Suburb : ${suburb}, <br/>
      Village :${village}, <br/> 
      District : ${district} , <br/> 
      State : ${state} <br/> ;
      County : ${country} <br/>`;
    fulladdress.innerHTML = `OR <br/> ${data.results[0].formatted}`;
  } catch (e) {
    console.log(e);
  }
}

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        getUserCurrentAddress(latitude, longitude);
      },
      (error) => {
        console.log(error.message);
      }
    );
  } else {
    address.innerHTML = "Location Access Denied";
  }
});

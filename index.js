let arr = [];
let html;
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundSize = "contain";
document.body.style.width = '440px';
document.body.style.height = '250px';

// get current location of the user
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

        let img = `  <img src="spiner.gif" class="mySpinner"  style="width:48px;height:48px;"></img>`
        html = img
        document.body.innerHTML = html;
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
// if else condition set weather backgreound image automatic he catch condition from api
function Condition(condition) {
    if (condition === "Clear") {
        document.body.style.backgroundImage = "url('sunny.jpg')"
    }
    if (condition === "Haze") {

        document.body.style.backgroundImage = "url(hazee.jpg)"

    }
    if (condition === "Smoke") {

        document.body.style.backgroundImage = "url(fog1.jpg)"

    }
    if (condition === "Clouds") {

        document.body.style.backgroundImage = "url(clouds.jpg)"

    }
    if (condition === "Partly Cloudy") {

        document.body.style.backgroundImage = "url(clouds.jpg)"

    }
    if (condition === "Rain") {

        document.body.style.backgroundImage = "url(rain1.jpg)"

    }
    if (condition === "Mist") {

        document.body.style.backgroundImage = "url(dust.jpg)"

    }
    if (condition === "Thunderstorm") {

        document.body.style.backgroundImage = "url(rain1.jpg)"

    }

    if (condition === "Dust") {

        document.body.style.backgroundImage = "url(hazee.jpg)"

    }
    if (condition === "Fog") {

        document.body.style.backgroundImage = "url(fog1.jpg)"

    }
    if (condition === "Snow") {

        document.body.style.backgroundImage = "url(snow3.jpg)"

    }

}

async function showPosition(position) {



    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}8&appid= YOUR API KEY`);
    let response = await data.json();

    arr.push(response);


    arr.map((elem) => {
// append all api data in HTML varaiable
        html =
            `
 


<div class="container">
<div class="row d-flex justify-content-center align-items-center h-100">
<div class="col-md-10 col-lg-8 col-xl-6">

<div class="card bg-dark text-white" style="border-radius: 40px;">
  <div class="bg-image" style="border-radius: 35px;">
  
  
  </div>
  <div class="card-img-overlay text-dark p-5">
                    <h4 class="mb-0">${elem.name} - ${elem.sys.country}</h4>
                    <p class="display-2 my-3">${Math.round(elem.main.temp).toString().slice(0, 2)}&deg</p>
                    <p class="mb-2">Feels Like: <strong>${Math.round(elem.main.feels_like).toString().slice(0, 2)}&deg</strong></p>
                    <h5>${elem.weather[0].main}</h5>
                  <p style=" display: none">${Condition(elem.weather[0].main)} <p/>
                </div>
</div>

</div>
</div>
</div>











  `
    })

    setTimeout(() => {
        // Now set my all api data in document body html
        document.body.innerHTML = html;
    }, 1000);







}






// Permissions must be requested from inside a user gesture, like a button's
// click handler.
window.addEventListener("load", function () {
// if i run this code then every 30 minutes my app will refresh and hit the weather api and get updated data
//    setInterval(() => {
//     getLocation()
//    },1800000 );

getLocation()

})
//json
 console.log("=== Hour 1;JSON Basics ===");

 let student = {
    name:"Naveen",
    age:20,
    marks:[90,65,93]
 };

//
fetch("https://jsnoplaceholder.typicode.com/posts/1")
 .then(Response=> Response.json())
 .then(data =>console.log("fetched data:",data))
 .catch(error => console.error("Error:",error))

 //modified the above url
 fetch("https://jsnoplaceholder.typicode.com/posts/")
 .then(Response=> Response.json())
 .then(data =>console.log("fetched data:",data))
 .catch(error => console.error("Error:",error))



//fetch users
fetch("https://jsonplaceholder.typicode.com/users")
.then(res =>res.json())
.then(users => {
    let output ="<h3> user list</h3><ul>";
    users.forEach(user =>{
        output +=`<li> ${user.name} - ${user.email}</li>`;
    });
    output +="</ul>";
    //result
    document.body.innerHTML +=output;

});



/*const cityCoords ={
    "bangalore":{ lat:12.6,lon:77.5},
    "delhi" :{ lat: 35.67 ,lon: 1.06},
    "mumbai":{ lat:19.07,lon:72.87},
    "london" :{lat:51.51,lon:-0.13},
    "newyork":{ lat:40.71, lon:-74.01}
};
//
 document.getElementById("fetchBtn").addEventListener("click",() => {
    //then(data =>
let city=document.getElementByid("cityInput").value.toLowercase();

if(!cityCoords[city]){
document.getElementById("weather").innerHTML =" city not in list!"
    return;
}

let coords=cityCoords[city];
let url= `https://api.open.meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
});


//Azax  fetch
fetch(url)
.then(res => res.json())
.then(data => {
    if(data.current_weather){
        document.getElementById("weather").innerHTML =`
        <h3>Wheather in ${city}</h3>
        <p>temp: ${data.current_weather.temperature} *C</p>
        <p>wind: ${data.current_weather.windspeed} km/h </p>
        <p>time: ${data.current_weather.time} </p>`;
    }else{
        document.grtElementById("weather").innerHTML =" no data available";
    }
})
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});
*/
//jsci7qmt

//code
const cityCoords = {
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};


// Event Listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "⚠️ City not in list!";
    return;
  }

  let coords = cityCoords[city];
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

  // AJAX Fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Weather in ${city}</h3>
          <p>🌡 Temp: ${data.current_weather.temperature}°C</p>
          <p>💨 Wind: ${data.current_weather.windspeed} km/h</p>
          <p>⏱ Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "⚠️ No data available.";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerHTML = "⚠️ Error fetching weather.";
    });
});

"use strict";
let alldegree = [];
let mycity = document.querySelector("#location");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let day1 = d.getDay();
if (day1 == 7)
{
  day1 = 0;
}
let x = day1
let day2 = x+=1;
if (day2 == 7)
{
  day2 = 0;
}
let y = day2;
let day3 = y+=1;
if (day3 == 7)
{
  day3 = 0;
}

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function city(trem)
{
  getdegree(trem);
}

async function getdegree(city)
{
  let myhttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=937a962d69ed43c2a58171729230208&q=${city}&days=3`);
  alldegree = await myhttp.json();
  display();
}

function display()
{
  
  document.getElementById("temperature").innerHTML = `<div class="col-lg-4 ms-5">
    <div>
    <div class="card border-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header d-flex justify-content-between">
    <div class="today">
      ${days[day1]}
    </div>
    <div class="date">
      ${d.getDate()}${months[d.getMonth()]}
    </div>
    </div>
    <div class="card-body text-secondary">
    <div class="city my-2">${alldegree.location.name}</div>
    <div class="degree my-2 d-flex align-items-center justify-content-between">
    <div class="num">
      <h1>${alldegree.current.temp_c}<sup>o</sup>c</h1>
    </div>
    <div class="degree-img">
      <img src="https:${alldegree.current.condition.icon}" alt="">
    </div>
    </div>
    <div class="custom my-3">${alldegree.current.condition.text}</div>
    <span class="me-2"><i class="fa-solid fa-umbrella me-1"></i>20%</span>
    <span><i class="fa-solid fa-wind me-1"></i>18km/h</span>
    <span class="ms-2"><i class="fa-solid fa-compass me-1"></i>East%</span>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4 ms-5">
    <div>
    <div class="card border-secondary mb-3 text-center" style="max-width: 18rem;">
    <div class="card-header headercolor today">${days[day2]}</div>
    <div class="card-body bodycolor text-secondary">
    <div class="degree-img">
      <img src="https:${alldegree.forecast.forecastday[1].day.condition.icon}" alt="">
    </div>
    <div class="num">
      <h1>${alldegree.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</h1>
        ${alldegree.forecast.forecastday[1].day.mintemp_c} <sup>o</sup>c
    </div>
    <div class="custom my-2">${alldegree.forecast.forecastday[1].day.condition.text}</div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-4">
    <div>
    <div class="card border-secondary mb-3 text-center" style="max-width: 18rem;">
    <div class="card-header today">${days[day3]}</div>
    <div class="card-body text-secondary">
    <div class="degree-img">
      <img src="https:${alldegree.forecast.forecastday[2].day.condition.icon}" alt="">
    </div>
    <div class="num">
      <h1>${alldegree.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</h1>
      ${alldegree.forecast.forecastday[2].day.mintemp_c} <sup>o</sup>c
    </div>
    <div class="custom my-2">${alldegree.forecast.forecastday[2].day.condition.text}</div>
    </div>
    </div>
    </div>
    </div>`
}

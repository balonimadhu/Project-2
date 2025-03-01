const birthdate = document.querySelector(".birthdate");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault(); //prevent from default value

  let year = 0;
  let month = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (!birthdate.value) {
    result.textContent = "Please Select Your Birthdate";
    return;
  }

  //create object for date
  const date = new Date(birthdate.value);
  console.log(date);

  const birthYear = date.getFullYear();
  const birthMonth = date.getMonth() + 1; // Months are zero-index-based
  const birthDate = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // console.log(birthYear, birthMonth ,birthDate, hour, minute, second );

  //getting current date
  const today = new Date();
  console.log(today);
  let currentDob = today.getFullYear();
  let currentBirthMonth = today.getMonth() + 1;
  let currentBirthDate = today.getDate();
  let currenthour = today.getHours();
  let currentminute = today.getMinutes();
  let currentsecond = today.getSeconds();

  //check date is not greater than today
  if (date > today) {
    result.textContent = "Enter Valid Birthdate";
    return;
  }

  days = currentBirthDate - birthDate;

  month = currentBirthMonth - birthMonth;

  year = currentDob - birthYear;

  hours = currenthour - hour;

  minutes = currentminute - minute;

  seconds = currentsecond - second;

  // for checking last day of previous month
  if (days < 0) {
    month--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }
  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  if (hours < 0) {
    days--;
    hours += 24;
  }

  console.log(year, month, hours, minutes, seconds);

  document.getElementById("age").innerHTML = `<div class='table'>
  <table>
  <tr>
    <td>Year</td>
    <td>${year} </td>
  </tr>
  <tr>
    <td>Months</td>
    <td>${month}</td>
     </tr>
     <tr>
    <td>Days</td>
    <td>${days}</td>
    </tr>
    <tr>
    <td>Hours</td>
     <td>${hours}</td>
    </tr>
    <tr>
    <td>Minutes</td>
     <td>${minutes} </td>
    </tr>
    <tr>
    <td>Seconds</td>
     <td>${seconds}</td>
   </tr>
</table>
</div>`;
});

// calculator js
document.querySelector("#calculatorButton").addEventListener("click", () => {
  document.querySelector("#divOne").style.display = "block";
  document.querySelector("#main").style.backdropFilter = "blur(5px)";
  document.querySelector("#lifeTracker").style.filter = "blur(5px)";
  document.querySelector("#cross-button").style.display = "block";
});

document.querySelector("#cross-button").addEventListener("click", () => {
  document.querySelector("#divOne").style.display = "none";
  document.querySelector("#main").style.backdropFilter = "blur(0px)";
  document.querySelector("#lifeTracker").style.filter = "blur(0px)";
  document.querySelector("#cross-button").style.display = "none";
});

//toggle

var darkTheme = document.getElementById("dark");

darkTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    darkTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

//clock js code
function displayTime() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
}
setInterval(displayTime, 1000);


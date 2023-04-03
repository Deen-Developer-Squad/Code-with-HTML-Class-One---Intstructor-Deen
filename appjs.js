let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDay();
// let currentDayinMonth = Date.now();

let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();

document.write (currentHour);
document.write (currentMinute);
document.write (currentSeconds);

if (currentDay == 2){
    document.getElementById('opensite').style.display = 'none';
    document.getElementById('closesite').style.display = 'block';
}else{
    document.getElementById('opensite').style.display = 'block';
}

// document.getElementById('closesite').style.display = 'none';
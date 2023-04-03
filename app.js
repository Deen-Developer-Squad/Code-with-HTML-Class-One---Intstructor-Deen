let  name = 'John Mick';

let birthyear = 2002;
let birthmonth = 'April';
let birthday = 3;

function claim(){
    alert('The President of United State just offered you 1K dollar as your birthday present');
}

// Dates
let currentDate = new Date();


// Get Month
let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

let getMonth = currentDate.getMonth();
let currentMonth = months[getMonth];


// Get Days of the Month
let currentDay = currentDate.getDate();


// Get Days of the Week
let currentDaysofWeek = currentDate.getDay();


// Get Year
let currentYear = currentDate.getFullYear();

if((currentMonth == birthmonth) && (currentDay == birthday)){
    document.write ('<h2>HAPPY BIRTHDAY!</h2>');
    document.getElementById('getpromo').style.display = 'block';
}else{
    document.write("Today isn't your birthday");
}


switch (currentDaysofWeek){
    case 0:
        document.write ("Happy Sunday!");
        break;
    case 1:
        document.write ("Happy Monday!");
        break;
    case 2:
        document.write ("Happy Tuesday!");
        break;
    case 3:
        document.write ("Happy Wednesday!");
        break;
    case 4:
        document.write ("Happy Thursday!");
        break;
    case 5:
        document.write ("Happy Friday!");
        break;
    default:
        document.write ("Happy Saturday!");
        break;
}
//1

let dates = [];

let currentDate = new Date();

dates.push(currentDate);
console.log(currentDate);

//2
let chosenDate = new Date (2018, 11, 8);
dates.push(chosenDate);
dates[1].setHours(21);

//3
let daysOfWeek = [];
let daysOfMonth = [];

dates.forEach(function(item){

    daysOfWeek.push(item.getDay());
})

function daysInMonth (month, year) { 
    return new Date(year , month + 1, 0).getDate();
  }

dates.forEach(function(item){

    daysOfMonth.push(daysInMonth(item.getMonth(),item.getFullYear()));
})

let unitedDate = [];

for(let i = 0; i < dates.length; i++){
    let currDate = "Date: ";
    if (dates[i].getDate() < 10) currDate+="0";
    currDate+=dates[i].getDate();
    currDate+=".";

    if (dates[i].getMonth() < 9) currDate+="0";
    let month = dates[i].getMonth() + 1;
    currDate+=month;
    currDate+=".";

    currentDate+=dates[i].getFullYear();
    currentDate+=", time: ";

    if (dates[i].getHours() < 10) currDate+="0";
    currDate+=dates[i].getHours();
    currDate+=":";

    if (dates[i].getMinutes() < 10) currDate+="0";
    currDate+=dates[i].getMinutes();
    currDate+=":";

    if (dates[i].getSeconds() < 10) currDate+="0";
    currDate+=dates[i].getSeconds();
    currDate+=", ";

    switch(daysOfWeek[i]){
        case 0: currDate+="Sunday, "; break;
        case 1: currDate+="Monday, ";break;
        case 2: currDate+="Tuesday, ";break;
        case 3: currDate+="Wednesday, ";break;
        case 4: currDate+="Thursday, ";break;
        case 5: currDate+="Friday, ";break;
        case 6: currDate+="Satyrday, ";break;
    }
    
    currDate+= daysOfMonth[i];
    currDate+= " days";

    unitedDate.push(currDate);
}
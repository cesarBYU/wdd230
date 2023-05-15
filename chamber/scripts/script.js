
function toggleMenu() {

    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerbutton').classList.toggle('open');
}

const x = document.getElementById('hamburgerbutton');

x.onclick = toggleMenu;








const date = new Date();

// Displaying current year after the copyright symbol

let year = date.getFullYear();
document.querySelector(".year").textContent = year;


// Displaying the last modified Date
let LastModif = new Date(document.lastModified);
let modifdate = LastModif.toLocaleDateString();
let modiftime = LastModif.toLocaleTimeString();

document.querySelector(".last-modification").textContent = `${modifdate} ${modiftime}`;


const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'march', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let dayNumber = date.getDay();
let weekDay = daysOfWeek[dayNumber];
let month = date.getMonth();
let monthString = months[month]
let dayDate = date.getDate()

let formattedDate = weekDay + ', ' + monthString + ' ' + dayDate + ' ' + year
document.querySelector(".datetime").textContent = formattedDate;


console.log(dayNumber);
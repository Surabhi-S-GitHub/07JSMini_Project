const monthname=document.getElementById("month-name");
const dayname=document.getElementById("day-name");
const daynumber=document.getElementById("day-number");
const year=document.getElementById("year");

const date=new Date();
const month=date.getMonth()
monthname.innerText=date.toLocaleDateString("en",{month:"long"})
dayname.innerHTML=date.toLocaleDateString("end",{weekday:"long"})
daynumber.innerHTML=date.getDate()
year.innerHTML=date.getFullYear()
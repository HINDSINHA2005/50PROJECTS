const daye1=document.getElementById("day");
const houre1=document.getElementById("hour");
const minutee1=document.getElementById("minute");
const seconde1=document.getElementById("second");

const newyearTime=new Date("Jan 1,2027,00:00:00").getTime();
updateCountdown()


function updateCountdown(){
const now=new Date().getTime();
const gap=newyearTime-now
const second =1000;
const minute=second*60;
const hour=minute*60;
const day=hour*24;

const d=Math.floor(gap/day);
const h=Math.floor((gap%day)/hour);
const m=Math.floor((gap % hour)/minute);
const s=Math.floor((gap%minute)/second);
daye1.innerText=d;
houre1.innerText=h;
minutee1.innerText=m;
seconde1.innerText=s;
}

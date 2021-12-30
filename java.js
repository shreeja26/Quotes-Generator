/*
let geth1 = document.querySelector('.welcome');
let gettime = document.querySelector('.date');
/*let newele = document.createElement("h1");*/
let date = new Date();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let hours = date.getHours();
let createtext = "";
if(hours>=4 && hours<10)
{
    createtext = "Good Morning";
}
else if(hours>=10 && hours<12)
{
    createtext = "Good Day";
}
else if(hours>=12 && hours<15)
{
    createtext = "Good Afternoon";
}
else if(hours>=15 && hours<20)
{
    createtext = "Good Evening";
}
else if(hours>=20 && hours<24)
{
    createtext = "Good Night";
}
else
{
    createtext = "Are you from another planet";
}

gettime.innerHTML = time;
geth1.innerHTML = createtext;




var quotes = [       
    "The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
    "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown",
    "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. –  Vince Lombardi",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.– Steve Jobs",
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen",
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
    "We May Encounter Many Defeats But We Must Not Be Defeated.– Maya Angelou",
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe",
    "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?– Brian Tracy",
]
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90","#34deeb","#8f2811","#00f7da"];
var i=0;



var mybutton = document.getElementById('button');
mybutton.addEventListener('click', ()=> {
    var numbers = Math.floor(Math.random() * (quotes.length));
    document.getElementById("demo").innerHTML = quotes[numbers];

    i = i < colors.length ? ++i : 0;
    document.querySelector('#first').style.backgroundColor = colors[i];
    document.querySelector('#second').style.backgroundColor = colors[i];
    document.querySelector('#first-1').style.backgroundColor = colors[i];
    document.querySelector('#second-2').style.backgroundColor = colors[i];
    document.querySelector('.body').style.color = colors[i];   
});*/








let geth1 = document.querySelector('.welcome');
let gettime = document.querySelector('.date');
/*let newele = document.createElement("h1");*/

var clock = setInterval(settiming, 1000);
function settiming(){
    var date = new Date();
    var time = date.toLocaleTimeString();
    gettime.innerHTML = time;
}

let hours = date.getHours();
let createtext = "";
if(hours>=4 && hours<10)
{
    createtext = "Good Morning";
}
else if(hours>=10 && hours<12)
{
    createtext = "Good Day";
}
else if(hours>=12 && hours<15)
{
    createtext = "Good Afternoon";
}
else if(hours>=15 && hours<20)
{
    createtext = "Good Evening";
}
else if(hours>=20 && hours<24)
{
    createtext = "Good Night";
}
else
{
    createtext = "Are you from another planet";
}
geth1.innerHTML = createtext;




var quotes = [       
    "The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney",
    "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
    "Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers",
    "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character. – Unknown",
    "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up. –  Vince Lombardi",
    "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.– Steve Jobs",
    "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. – Rob Siltanen",
    "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. – Og Mandino",
    "We May Encounter Many Defeats But We Must Not Be Defeated.– Maya Angelou",
    "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. – Johann Wolfgang Von Goethe",
    "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?– Brian Tracy",
]
var colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90","#34deeb","#8f2811","#00f7da"];
var i=0;



var mybutton = document.getElementById('button');
mybutton.addEventListener('click', ()=> {
    var numbers = Math.floor(Math.random() * (quotes.length));
    document.getElementById("demo").innerHTML = quotes[numbers];

    i = i < colors.length ? ++i : 0;
    document.querySelector('#first').style.backgroundColor = colors[i];
    document.querySelector('#second').style.backgroundColor = colors[i];
    document.querySelector('#first-1').style.backgroundColor = colors[i];
    document.querySelector('#second-2').style.backgroundColor = colors[i];
    document.querySelector('.body').style.color = colors[i];
    
});



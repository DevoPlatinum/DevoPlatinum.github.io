// Initialize a counter variable
let money = 0;
let active = 1;
let passive = 0;
let pollution = 0;
let percentage = 0;
let total = 0;

// Initialize news counter
newsone = 0;
newstwo = 0;
good = 0;
bad = 0;

// ending counter
let ended = 0;

// Initialize costs for upgrades
let WTCost = 20;
let WTEarn = 1;

let CPCost = 25;
let CPEarn = 2;

let SPCost = 200;
let SPEarn = 10;

let NGCost = 500;
let NGEarn = 50;

let DACCost = 1500;
let DACEarn = 125;

let NPPCost = 15000;
let NPPEarn = 1500;

let NFPCost = 249999;
let NFPEarn = 23456;


// Function to change money counter
function changeCounter() {
    if (ended != 1 || pollution <= 10) {
        document.getElementById('gold').innerText = 'Money: $' + Math.trunc(money);
        document.getElementById('goldps').innerText = 'Per second: $' + Math.trunc(passive);
        // bottonRefresh();
        changeBar();
    }

}

// Function to increment the counter when user taps
function incrementCounter() {
    money += active;
    total += active;
    changeCounter()
    // changeNews()
}

// Purchase Functions
function purchaseWindturbine() {
    if (money >= WTCost) {
        money -= WTCost;
        passive += WTEarn;
        changeCounter();

        WTCost *= 1.15;

        // Increment cost
        document.getElementById('WTCost').innerText = 'Cost: $' + Math.trunc(WTCost) + ' / +$' + Math.trunc(WTEarn) + ' per second';
    }
}

function purchaseCoalPlant() {
    if (money >= CPCost) {
        money -= CPCost;
        passive += CPEarn;
        changeCounter();

        CPCost *= 1.1;
        CPEarn *= 1.1;
        document.getElementById('CPCost').innerText = 'Cost: $' + Math.trunc(CPCost) + ' / +$' + Math.trunc(CPEarn) + ' per second'
        pollution += 1;
        document.getElementById("barpercent").classList.add('bg-danger');
        document.getElementById("barpercent").classList.remove('bg-success');
    }
    const element = document.querySelector('.earth');
    element.style.backgroundColor = 'red';
}

function purchaseSolarPlant() {
    if (money >= SPCost) {
        money -= SPCost;
        passive += SPEarn;
        changeCounter();

        SPCost *= 1.15;
        SPEarn *= 1.1;
        document.getElementById('SPCost').innerText = 'Cost: $' + Math.trunc(SPCost) + ' / +$' + Math.trunc(SPEarn) + ' per second'
    }
}

function purchaseNaturalGas() {
    if (money >= NGCost) {
        money -= NGCost;
        passive += NGEarn;
        changeCounter();

        NGCost *= 1.1;
        NGEarn *= 1.3;
        document.getElementById('NGCost').innerText = 'Cost: $' + Math.trunc(NGCost) + ' / +$' + Math.trunc(NGEarn) + ' per second'
        pollution += 1;

        document.getElementById("barpercent").classList.add('bg-danger');
        document.getElementById("barpercent").classList.remove('bg-success');
    }

    const element = document.querySelector('.earth');
    element.style.backgroundColor = 'red';
}

function purchaseDAC() {
    if (money >= DACCost) {
        money -= DACCost;
        passive += DACEarn;
        changeCounter();

        DACCost *= 1.15;
        document.getElementById('DACCost').innerText = 'Cost: $' + Math.trunc(DACCost) + ' / +$' + Math.trunc(DACEarn) + ' per second'
    }
}

function purchaseNuclearFission() {
    if (money >= NPPCost) {
        money -= NPPCost;
        passive += NPPEarn;
        changeCounter();

        NPPCost *= 1.15;
        document.getElementById('NPPCost').innerText = 'Cost: $' + Math.trunc(NPPCost) + ' / +$' + Math.trunc(NPPEarn) + ' per second'
    }
}

function purchaseNuclearFusion() {
    if (money >= NFPCost) {
        money -= NFPCost;
        passive += NFPEarn;
        changeCounter();

        NFPCost *= 1.15;
        NFPEarn *= 1.3;
        document.getElementById('NFPCost').innerText = 'Cost: $' + Math.trunc(NFPCost) + ' / +$' + Math.trunc(NFPEarn) + ' per second'
    }
}


function passiveIncome() {
    money += passive;
    total += passive;
    changeCounter();
}

// Call the function every second (1000 milliseconds)
setInterval(passiveIncome, 1000);

/*
// Disable button
function bottonRefresh() {
    if (money < WTCost) {
        document.getElementById("WTB").disabled = true;
    }
    else {
        document.getElementById("WTB").disabled = false;
    }
}

buttonRefresh();
*/

// Initialize News
var regularArray1 = [
    'You want to solve climate change. But your neighbour says climate change is not real.',
    'You hand crank your Wind Turbines to generate more electricity'
];

var regularArray2 = [
    'You can call yourself rich to your family!',
    'NYC runs on your electricity now.',
    'Everyone in Manhattan wants to get a photo with you.',
    'You just met with the president.'
];

var greenArray = [ // 7 News
    'Congratulations for purifying Earth!',
    'You won the Nobel Prize for Environment!',
    'Nuclear Fission removes the need for fossil fuels.',
    'Big oil companies file joint lawsuit against climate player.',
    'Fossil fuels become a thing of the past.',
    'Extensive Direct Air Capture achieves Carbon Neutrality, a day that humans will never forget.',
    "You received an A for Professor Rabinowitz's class! A day that you will never forget."
];

var redArray = [ // 7 News
    'Carbon Dioxide reaches 600 ppm, failing to reach standards set by World Organizations.',
    'First city scale fossil fuel plant built on Earth.',
    'The price of mangos plummeted because they can now be grown in Canada and northern Europe due to increased global temperature!',
    "Category 5 hurricane 'Squirrel' submerges Eastern US.",
    'Satellites show all ice shelves have disappeared in Antarctica.',
    'Your hometown is but raging waters.',
    'You are rich, but what worth does your money still have?'
];

// Change News

function changeNews() {
    if (ended == 0) {
        if (total < 300) {
            document.getElementById("news1").innerText = regularArray1[newsone];
            if (newsone == 0) {
                newsone = 1;
            } else {
                newsone = 0;
            }
    
        } else {
            if (total >= 400) {
                document.getElementById("news1").innerText = regularArray2[newstwo];
            }
            newstwo ++;
            
            if (newstwo >= (regularArray2.length)) {
                newstwo = 0;
            }
        }
    }
    
}

setInterval(changeNews, 7000);

/* News random
if (total >= 400) {
    var randomNumber = Math.floor(Math.random()*regularArray2.length);
    if (num == 0) {
        document.getElementById("news1").innerText = regularArray2[randomNumber];
    }  
}
*/

function playgoodending() {
    document.getElementById("news1").innerText = greenArray[good];
    setInterval(goodendingNews, 3000);
}

function goodendingNews() {
    document.getElementById("news1").innerText = greenArray[good];
    good ++;
    if (good >= (greenArray.length)) {
        good = 0;
    }
}

function playbadending() {
    document.getElementById("news1").innerText = redArray[bad];
    setInterval(badendingNews, 3000);
}

function badendingNews() {
    document.getElementById("news1").innerText = redArray[bad];
    bad ++;
    if (bad >= (redArray.length)) {
        bad = 0;
    }
}

// Change Progress Bar
function changeBar() {
    percentage = Math.trunc(((1-Math.exp(-(total/500000))) / (1-Math.exp(-1)))*100);
    if (percentage <= 99) {
        document.getElementById("barpercent").innerText = percentage + '%'
        document.getElementById("barpercent").style.width = percentage + '%'
    }
    else if (ended == 0) {
        if (pollution <= 10) {
            document.getElementById("barpercent").classList.add('bg-success');
            document.getElementById("barpercent").classList.remove('bg-danger');
            document.getElementById("barpercent").innerText = '100% COMPLETE'
            document.getElementById("barpercent").style.width = '100%'
            ended = 1;
            const element = document.querySelector('.earth');
            element.style.backgroundColor = '#7FFFD4';
            playgoodending();
        }
        else {
            playbadending();
            document.getElementById("barpercent").innerText = 'CARBON NEUTRALITY UNSUCCESSFUL'
            document.getElementById("barpercent").style.width = '100%'
            document.getElementById('gold').innerText = 'Money: NUL'
            document.getElementById('goldps').innerText = 'Per second: NUL'
            ended = 1;
            playbadending();
        }
    }
}




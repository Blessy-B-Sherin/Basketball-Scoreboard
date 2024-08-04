let homeCount = document.getElementById("home")
let guestCount = document.getElementById("guest")

let HomeHead = document.getElementById("home-head")
let GuestHead = document.getElementById("guest-head")

let countHome = 0
let countGuest = 0

function homeOne(){
    countHome = countHome + 1
    homeCount.innerText = countHome
    // console.log(count)
    highlight();
}
function homeTwo(){
    countHome = countHome + 2
    homeCount.innerText = countHome
    highlight();
}
function homeThree(){
    countHome = countHome + 3
    homeCount.innerText = countHome
    highlight();
}
function guestOne(){
    countGuest = countGuest + 1
    guestCount.innerText = countGuest
    highlight();
}
function guestTwo(){
    countGuest = countGuest + 2
    guestCount.innerText = countGuest
    highlight();
}
function guestThree(){
    countGuest = countGuest + 3
    guestCount.innerText = countGuest
    highlight();
}
function newGame(){
    countGuest = 0
    countHome = 0
    guestCount.innerText = countGuest
    homeCount.innerText = countHome
    
    document.getElementById('home-icon').style.display = 'none';
    document.getElementById('guest-icon').style.display = 'none';
}
function highlight() {
    
    HomeHead.classList.remove('leading', 'tie');
    GuestHead.classList.remove('leading', 'tie');

    
    document.getElementById('home-icon').style.display = 'none';
    document.getElementById('guest-icon').style.display = 'none';

    if (countHome > countGuest) {
        HomeHead.classList.add('leading');
        document.getElementById('home-icon').style.display = 'inline';
    } else if (countGuest > countHome) {
        GuestHead.classList.add('leading');
        document.getElementById('guest-icon').style.display = 'inline';
    } else {
        HomeHead.classList.add('tie');
        GuestHead.classList.add('tie');
        document.getElementById('home-icon').style.display = 'inline';
        document.getElementById('guest-icon').style.display = 'inline';
    }
}


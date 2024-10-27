//* Login *//
function log(event) {

    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "user1") {
        alert("Username Incorrect");
    } else if (password !== "12345") {
        alert("Password Incorrect");
    } else {
        alert("Login Successful!");

        window.location.href = "../index.html";
    }
}

//* Forgot Pass *//
function forgotpass() {
    alert("Sorry, this function is not yet available.");
}

//*Submit a message*//
function sub(event) {

    event.preventDefault();

    var name = document.getElementById("fn").value;

    alert("Thank you " + name + ". Your message was sent successfully!");
}


//*Pasta Carousel*//
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const visibleSlides = 3; 
const step = 3; 

function updateSlidePosition() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const offset = slideIndex * (slideWidth + 30);
    slides.style.transform = `translateX(-${offset}px)`;
}

function prev() {

    if (slideIndex - step >= 0) {
        slideIndex -= step;
    } else {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function next() {
    
    if (slideIndex + step < totalSlides - visibleSlides + 1) {
        slideIndex += step;
    } else {
        slideIndex = totalSlides - visibleSlides;
    }
    updateSlidePosition();
}
window.addEventListener('resize', updateSlidePosition);


//*POP UP ORDER*//
function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('order').style.display = 'block';
    document.getElementById('darken').style.display = 'block';
    document.body.classList.add('no-scroll');   
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('no-scroll');
}

function placeOrder(event) {
    event.preventDefault();
    
    var fullname = document.getElementById('ordername').value;
    var address = document.getElementById('orderaddress').value;
    var price = document.getElementById('orderprice').value;
    var payment = document.getElementById('orderpayment').value;
    var change = payment - price;

    if (change < 0) {
        alert("Tansaction Failed. Not enough money.");
    } else {
        alert("Receipt of Payment" +
        "\n-------------------------------------------------------" +
        "\nName: " + fullname + 
        "\nAddress: " + address + 
        "\nPrice: " + price + 
        "\nPayment: " + payment + 
        "\n-------------------------------------------------------" +
        "\nTotal Change: " + change +
        "\n-------------------------------------------------------" +
        "\nThank you for ordering.");
    closePopup();
    }
    setTimeout(function() {
        window.location.hash = "#menu";
    }, 100);  
}


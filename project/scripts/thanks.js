counter = document.getElementById("counter")
number = localStorage.getItem("totalVisits")
counter.textContent = localStorage.getItem("totalVisits")

if (number == 1) {
    message = document.getElementById("message");
    message.textContent = ("Congratulations! You are the first visitor to this page!");
}

else if (number % 5 == 0) {
    message = document.getElementById("message");
    message.textContent = ("Congratulations! You've earned a coupon! Use code JM2025 for 25% off your first purchase!");
}

else {
    message = document.getElementById("message");
    message.textContent = ("Thanks for your interest in Jennifer Malan Graphic Design!");

}


    
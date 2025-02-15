let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
  if (state == false) {
    record.classList.add("on");
    toneArm.classList.add("play");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    record.classList.remove("on");
    toneArm.classList.remove("play");
    song.pause();
  }
  state = !state;
});

slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

$("#messageState").on("change", (x) => {
    $(".message").removeClass("openNor").removeClass("closeNor");
    if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
        console.log("Abrindo");
    } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
        console.log("fechando");
    }
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if ($(".message").hasClass("closeNor"))
        $(".message").addClass("closed");
    $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    console.log("Animation End");
    if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
    else
        $(".heart").addClass("no-anim").removeClass("beating");
    $(".heart").removeClass("openHer").removeClass("closeHer");
});

// Add these functions to your existing JavaScript
function openPopup() {
    document.getElementById("popupModal").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

function nextPage() {
    window.location.href = "yes_page.html"; // Redirect to the "Yes" page
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.random() * 80 + 10}%`;
    noButton.style.top = `${Math.random() * 80 + 10}%`;
}

// Function to open the "Will you be my girlfriend?" pop-up
function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
}

// Function to close the "Will you be my girlfriend?" pop-up
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

// Function to open the "Let's go!" pop-up
function openLetsGoPopup() {
    document.getElementById("letsGoPopup").style.display = "flex";
}

// Function to move the "No" button randomly
function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const popupContent = document.querySelector(".popup-content");
    const popupRect = popupContent.getBoundingClientRect();

    // Generate random positions within the pop-up
    const maxX = popupRect.width - noButton.offsetWidth;
    const maxY = popupRect.height - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Event listeners for the buttons
document.getElementById("yesButton").addEventListener("click", () => {
    closePopup(); // Close the "Will you be my girlfriend?" pop-up
    openLetsGoPopup(); // Open the "Let's go!" pop-up
});

document.getElementById("noButton").addEventListener("click", moveNoButton);
document.getElementById("noButton").addEventListener("mouseover", moveNoButton);
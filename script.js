const hamburger = document.getElementById("hamburger-menu-icon");
const menu = document.getElementById("nav-links-container");
const nav_link = document.getElementsByClassName("nav-links-item");
const contact_form = document.getElementById("contact-form");


contact_form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you! Message successfully sent.");

    const first_name = document.getElementById("first-name");
    const last_name = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const newContact = {
        firstName: first_name.value,
        lastName: last_name.value,
        email: email.value,
        message : message.value
    };

    console.log("New potential client is: ", newContact);
});




function showMenu(){
    menu.classList.toggle("active");
};

hamburger.addEventListener('click', showMenu);



function hideMenu(){
    menu.classList.remove("active");
};

for(i = 0; i < nav_link.length; i++){
    nav_link[i].addEventListener('click', hideMenu);
};


function loadTop(){
    scrollTo(0,0);
};

window.addEventListener("load", loadTop);




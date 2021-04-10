// Show pre-loader for 1500 seconds
const loader = document.querySelector(".loader")
window.onload = () => {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1500);
}


// Based on button selected from the menu, button is set as active and drinks or foods are shown 
const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "drinks";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn() {
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn) {
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
        if (item.classList.contains(activeBtn)) {
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}


//Show pop up when Order now button is pressed after validation is done 
function showPopUp() {
    const a = document.forms["Form"]["name"].value;
    const b = document.forms["Form"]["email"].value;
    const c = document.forms["Form"]["number"].value;
    const d = document.forms["Form"]["address"].value;
    const e = document.forms["Form"]["food"].value;
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numberCheck = /^\d*\d*$/;
    if (!(a == "" || b == "" || c == "" || d == "" || e == "" || a == null || b == null || c == null || d == null || e == null)) {
        if (!(b.match(emailCheck)) || !(c.match(numberCheck))) {
            alert('Incorrect format of email address/phone number')
        }
        else {
            document.getElementById("open-popup-btn").addEventListener("click", function () {
            document.getElementsByClassName("popup")[0].classList.add("active");
            });
        }
    }
    else {
        alert('Fill all the fields in order to submit')
    }
}

           document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
           document.getElementsByClassName("popup")[0].classList.remove("active");
});



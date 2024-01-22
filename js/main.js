function clearInput() {
    let emailInput = document.getElementById('Email');
            if (emailInput.value === '') {
                emailInput.placeholder = 'Your Email';
            }
}

let search = document.getElementById('searchbutton');

let searchInput = document.getElementsByClassName('searchinput')[0];
let menu = document.getElementsByClassName('header__menu')[0];


search.addEventListener("click", function(e){
    searchInput.classList.toggle('active')
});

let burger = document.getElementsByClassName('header__burger')[0];

burger.addEventListener("click", function(e){
    burger.classList.toggle('click')
    menu.classList.toggle('show')
});
// ===============================================================================================

// Tính thời gian kể từ khi người dùng kick vào 
var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var currentTime = new Date().getTime();
  elapsedTime = (currentTime - startTime) / 1000;
}

// Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_style");
    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "flex";
    
    startTimer(); // Bắt đầu đếm thời gian khi người dùng kick vào
    setTimeout(function() {
        if (elapsedTime >= 3) {
            plusSlides(1);
        }
    }, 3000);
}

// ===============================================================================================
//Validate form
const signinForm = document.getElementById("signinForm");
const fogotPassForm = document.getElementById("fogotPassForm");
const createForm = document.getElementById("createForm");
var emailInput = document.getElementById("email");
var passwInput = document.getElementById("password");
var emailFogot = document.getElementById("email-fogot");
var emailCreate = document.getElementById("email-create");
var passwCreate = document.getElementById("password-create");


signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailInput) && isValidPassword(passwInput)) {
        alert("Sign In");
        signinForm.submit();
    }
});
fogotPassForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailFogot)) {
        alert("Fogot Password");
        fogotPassForm.submit();
    }
});
createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailCreate) && isValidPassword(passwCreate)) {
        alert("Create account");
        fogotPassForm.submit();
    }
});

function validateEmail(email) {
    
    if (email.value === "") {
        email.setCustomValidity("Email is required");
        return false;
    }
    if (!isValidEmail(email.value)) {
        email.setCustomValidity("Invalid email address");
        return false;
    }
    email.setCustomValidity("");
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(passw){
    if(passw.value === ""){
        passw.setCustomValidity("Password is required");
        return false;
    }
    return true;
}

// ===============================================================================================
// Show Hide
// function showHide(id){
//     var ctr = document.getElementById(id);
//     if(ctr.style.display == 'none')
//         ctr.style.display = 'block';
//     else
//         ctr.style.display = 'none';
// }
function ShowItem(id){
    var ctr = document.getElementById(id);
    ctr.style.display = 'block';
}
function CloseItem(id){
    var ctr = document.getElementById(id);
    ctr.style.display = 'none';
}
function showForm(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'none';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "block";
}
function showFormFlex(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'none';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "flex";
}
function closeFormClass(cl){
    var forms = document.getElementsByClassName(cl);
    for(var i = 0;i<forms.length; i++){
        forms[i].style.display = 'none';
    }
}
function closeForm(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'block';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "none";
}

function DongMo(cl, clActive){
    var acc = document.getElementsByClassName(cl);
    for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle(clActive);
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
}
DongMo("sidebar-heading", "coll-active");
DongMo("faq-tit", "active");



const sItems = document.querySelectorAll('.search-product')
const modal = document.querySelector('.product-colleciton')
const modalContainer = document.querySelector('.grid-item-product')
const modalClose = document.querySelector('.close-product')
// ham hien thi modal product (them class open vao modal)
function showProduct() {
    modal.classList.add('open')
}
//lap qua tung the sItems va nghe hanh vi click
for (const sItem of sItems){
    sItem.addEventListener('click',showProduct )
}

// Ham an modal product (go class open cua modal)
function hideProduct(){
    modal.classList.remove('open')
}
//nghe hanh vi click vao nut button close
modalClose.addEventListener('click', hideProduct)

modal.addEventListener('click', hideProduct)

modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})

// 
function openTab(evt, TabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
//   $( ".tablinks" ).first().addClass( "active" );
//   $( ".tabs-content" ).first().css( "display", "block" );
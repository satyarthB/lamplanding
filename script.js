const light = document.querySelector(".lamp-light")
const btn = document.querySelector(".btn")
function lightUp(){
    light.classList.toggle("on")

}
function turnOn(){
    btn.classList.toggle("active");
    lightUp();
}
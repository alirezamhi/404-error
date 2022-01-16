const container = document.querySelector('.container');

// container.addEventListener('mousemove' , myMouse);
// function myMouse(e){
//     let y = e.clientY / 5;
//     let x = e.clientX /5;

//     container.style.backgroundPositionY = y + "px";
//     container.style.backgroundPositionX = x + "px";
// }
window.onmousemove = function (event){
    let y = event.clientY / 5;
    let x = event.clientX /5;

    container.style.backgroundPositionY = y + "px";
    container.style.backgroundPositionX = x + "px";
}

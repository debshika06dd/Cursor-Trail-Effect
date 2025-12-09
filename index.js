let cursor = document.querySelector("#cursor");
let trails = document.querySelectorAll(".trail");

window.addEventListener("mousemove", function(e){

    //locate the current location of cursor
    let x = e.clientX;
    let y = e.clientY;

    //Move main cursor instantly 
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";


    //Animate trail with delay
    trails.forEach((trail, index)=>{
        setTimeout(()=>{
            trail.style.left = x + "px";
            trail.style.top = y + "px";
        }, index * 50);
    });
});
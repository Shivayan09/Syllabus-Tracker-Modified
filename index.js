const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function navAnimation() {
    gsap.from('.nav', {
        y:30, scale: 1, opacity: 0, delay: 0, duration: 1
    })
}
navAnimation()
const buttons = document.querySelectorAll(".check")
buttons.forEach(button => {
    button.addEventListener("click", function() {
        console.log("Hello");
        if(button.classList.contains("bg-white")) {
            button.classList.remove("bg-white");
            button.classList.add("bg-green-500");
        } else {
            button.classList.remove("bg-green-500");
            button.classList.add("bg-white");
        }
    })
})
document.addEventListener('mousemove', function(dets) {
    gsap.to('#cursor', {
        left: dets.x, top: dets.y
    })
})
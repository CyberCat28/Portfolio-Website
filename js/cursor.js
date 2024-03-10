const cursor = document.getElementById('cursor');
const outLine = document.getElementById('out-line');
const html = document.querySelector('html');

let mouseX = 0, mouseY = 0, posX = 0, posY =0;

const mouseCoords = (e) => {

    mouseX = e.pageX;
    mouseY = e.pageY;

}

html.addEventListener('mousemove', e => {
    mouseCoords(e)
})

gsap.to({}, .01, {
    repeat: -1,

    onRepeat: () => {

        posX += (mouseX - posX) / 5;
        posY += (mouseY - posY) / 5;

        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })

        gsap.set(outLine, {
            css: {
                left: posX,
                top: posY,
            }
        })

    }
})
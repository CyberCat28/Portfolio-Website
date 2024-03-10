const link = document.getElementById('header-nav');
const link2 = document.getElementById('hire-button');
const link3 = document.getElementById('download-button');
const link4 = document.getElementById('all-button');
const link5 = document.getElementById('site-button');
const link6 = document.getElementById('graphic-button');
const link7 = document.getElementById('web-button');
const link8 = document.getElementById('send-mess-button');

const cursorLinkMove = () => {
    cursor.classList.add('cursor-header-nav-move');
    outLine.classList.add('out-line-header-nav-move');
}

const cursorLink2Move = () => {
    cursor.classList.add('cursor-hire-button-move');
    outLine.classList.add('out-line-hire-button-move');
}

const cursorLink3Move = () => {
    cursor.classList.add('cursor-download-button-move');
    outLine.classList.add('out-line-download-button-move');
}

const cursorLink4Move = () => {
    cursor.classList.add('cursor-all-button-move');
    outLine.classList.add('out-line-all-button-move');
}

const cursorLink5Move = () => {
    cursor.classList.add('cursor-site-button-move');
    outLine.classList.add('out-line-site-button-move');
}

const cursorLink6Move = () => {
    cursor.classList.add('cursor-graphic-button-move');
    outLine.classList.add('out-line-graphic-button-move');
}

const cursorLink7Move = () => {
    cursor.classList.add('cursor-web-button-move');
    outLine.classList.add('out-line-web-button-move');
}

const cursorLink8Move = () => {
    cursor.classList.add('cursor-send-mess-button-move');
    outLine.classList.add('out-line-send-mess-button-move');
}

const cursorLink9Move = () => {
    cursor.classList.add('cursor-home-button-move');
    outLine.classList.add('out-line-home-button-move');
}

const cursorLink10Move = () => {
    cursor.classList.add('cursor-about-button-move');
    outLine.classList.add('out-line-about-button-move');
}

const cursorLink11Move = () => {
    cursor.classList.add('cursor-contact-button-move');
    outLine.classList.add('out-line-contact-button-move');
}


const cursorLinkLeave = () => {
    cursor.classList.remove('cursor-header-nav-move');
    outLine.classList.remove('out-line-header-nav-move');
}

const cursorLink2Leave = () => {
    cursor.classList.remove('cursor-hire-button-move');
    outLine.classList.remove('out-line-hire-button-move');
}

const cursorLink3Leave = () => {
    cursor.classList.remove('cursor-download-button-move');
    outLine.classList.remove('out-line-download-button-move');
}

const cursorLink4Leave = () => {
    cursor.classList.remove('cursor-all-button-move');
    outLine.classList.remove('out-line-all-button-move');
}

const cursorLink5Leave = () => {
    cursor.classList.remove('cursor-site-button-move');
    outLine.classList.remove('out-line-site-button-move');
}

const cursorLink6Leave = () => {
    cursor.classList.remove('cursor-graphic-button-move');
    outLine.classList.remove('out-line-graphic-button-move');
}

const cursorLink7Leave = () => {
    cursor.classList.remove('cursor-web-button-move');
    outLine.classList.remove('out-line-web-button-move');
}

const cursorLink8Leave = () => {
    cursor.classList.remove('cursor-send-mess-button-move');
    outLine.classList.remove('out-line-send-mess-button-move');
}

const cursorLink9Leave = () => {
    cursor.classList.add('cursor-home-button-move');
    outLine.classList.add('out-line-home-button-move');
}

const cursorLink10Leave = () => {
    cursor.classList.add('cursor-about-button-move');
    outLine.classList.add('out-line-about-button-move');
}

const cursorLink11Leave = () => {
    cursor.classList.add('cursor-contact-button-move');
    outLine.classList.add('out-line-contact-button-move');
}



link.onmousemove = () => cursorLinkMove();
link2.onmousemove = () => cursorLink2Move();
link3.onmousemove = () => cursorLink3Move();
link4.onmousemove = () => cursorLink4Move();
link5.onmousemove = () => cursorLink5Move();
link6.onmousemove = () => cursorLink6Move();
link7.onmousemove = () => cursorLink7Move();
link8.onmousemove = () => cursorLink8Move();

link.onmouseleave = () => cursorLinkLeave();
link2.onmouseleave = () => cursorLink2Leave();
link3.onmouseleave = () => cursorLink3Leave();
link4.onmouseleave = () => cursorLink4Leave();
link5.onmouseleave = () => cursorLink5Leave();
link6.onmouseleave = () => cursorLink6Leave();
link7.onmouseleave = () => cursorLink7Leave();
link8.onmouseleave = () => cursorLink8Leave();
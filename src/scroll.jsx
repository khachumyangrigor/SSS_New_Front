export const Attend_Scroll = () => {
    const startup = document.getElementsByClassName('startup')[0];
    const speaker = document.getElementsByClassName('speaker')[0];
    const investor = document.getElementsByClassName('investor')[0];
    const classOrder = () => {
        startup.classList.remove('open');
        speaker.classList.remove('open');
        investor.classList.remove('open');
    }
    if (window.innerWidth < 980) {
        if (window.scrollY > startup.offsetTop - 100 && window.scrollY < speaker.offsetTop - 100) {
            classOrder();
            startup.classList.add('open');
        }
        else if (window.scrollY > speaker.offsetTop - 100 && window.scrollY < investor.offsetTop - 100) {
            classOrder();
            speaker.classList.add('open');
        }
        else {
            classOrder();
            investor.classList.add('open');
        }
    }
}

export const Past_Page_Scroll = function (e) {

    let part2 = document.getElementsByClassName('part2Img')[0];
    let part2Ifrem = document.getElementsByClassName('part2Img')[0];
    let part2IfremList = document.getElementsByClassName('part2Text')[0];
    let part3 = document.getElementsByClassName('part3')[0];
    let part3row = document.getElementsByClassName('part3row')[0];
    if (typeof (part2) != "undefined" && typeof (part3) != "undefined") {
        if (e.detail.scrollPositionY > part2.offsetTop / 3) {
            part2Ifrem.classList.add('scrollShowMarg');
            part2IfremList.classList.add('scrollShowMarg');
        }
        if (e.detail.scrollPositionY > part3.offsetTop / 1.7) {
            part3row.classList.add('scrollShow');
        }
    }

}


const VERSION = '1.0.1';





// This file should not contain code that is to run immediately on page load.
// By default, this file will only run once HTML and CSS has loaded.

window.addEventListener('load', () => {

    console.log(`VERSION:   ${VERSION}`);
    
});

// let oldPageScrollPos = 0
// let newPageScrollPos = 0
const pageRoot = document.getElementsByTagName('app-page-container')[0];
const header = document.getElementsByTagName('app-header')[0];
const headerLeft = header.querySelector('.left');
const headerRight = header.querySelector('.right');
    const teamMagpies = headerRight.querySelector('.team-name');
    const contacts = teamMagpies.querySelector('.contacts');
    const icon = contacts.querySelectorAll('.icon');

window.addEventListener('scroll', () => {


    if (window.scrollY > 75) {
        console.log("Down");
        header.style.height = "48px";
        headerLeft.style.padding = "0 4px";
        teamMagpies.style.paddingRight = "0.8em";
        teamMagpies.style.width = "100px";
        teamMagpies.style.fontSize = "18px";
        contacts.style.marginRight = "0.8em";
        icon.forEach((icon) => {
            icon.style.opacity = "0";
            icon.style.width = "28px";
            icon.style.height = "28px";
        });

    } else {
        console.log("Up");
        header.style.height = "75px";
        headerLeft.style.padding = "0 1em";
        teamMagpies.style.paddingRight = "1em";
        teamMagpies.style.width = "180px";
        teamMagpies.style.fontSize = "22px";
        contacts.style.marginRight = "1em";  
        icon.forEach((icon) => {
            icon.style.opacity = "1";
            icon.style.width = "34px";
            icon.style.height = "34px";
        });   
    }

});



// contains the up/down movement
// window.addEventListener('scroll', (e) => {
//     newPageScrollPos = window.scrollY;
//     if (oldPageScrollPos < newPageScrollPos) {
//         if (newPageScrollPos > 30) {
//             console.log("Down");
//             header.style.minHeight = "48px";
//             header.style.padding = "0 0.6em";
//         }
//     } else if (oldPageScrollPos > newPageScrollPos) {
//         console.log("Up");
//         header.style.minHeight = "75px";
//         header.style.padding = "0 1em";
//         pageRoot.style.top = "75px";
//     }
//     oldPageScrollPos = newPageScrollPos;
// });

var navState = false;

function toggleNavState() {
    const nav = document.getElementsByTagName('nav-container')[0].style;
    if (navState) {
        // to close nav
        nav.opacity = 0;
        nav.transform = "translateX(-120%) scale(0.5)";
        navState = false;
        setTimeout(() => {
            // removes the focus from nav button after finished
            document.activeElement.blur()
        }, 250);
    } else {
        // to open nav
        nav.opacity = 1;
        nav.transform = "translateX(0) scale(1)";
        navState = true;
    }
}

// navigate
function navigate(url) {
    if (url) {
        window.open(url,'_blank');
        return false;
    } else {
        console.error('WARNING: Navigate was called without any arguments.')
    }
}
function navigateLocal(url) {
    if (url == 'root') {
        location.href = "https:\/\/rodriguessunil.github.io/Magpies/";
    } else if (url) {
        location.href = "https:\/\/rodriguessunil.github.io/Magpies/" + url;
    } else {
        console.error('WARNING: Navigate was called without any arguments.')
    }
}
// for navbar animation
var sections = document.querySelectorAll('.section')
var navLinks = document.querySelectorAll('.nav__link');

// for projects section animation
var numbers = document.querySelectorAll('.done .p2')
var doneSection = document.querySelector('.done-prjects')
var started = false

// for skills section animation
var aboutSection = document.getElementById('about')
var spans = document.querySelectorAll('.skill__range span')


window.onscroll = () => {
    // for navbar animation
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 240
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove active class from all links
                link.classList.remove('active');

                // Add active class to the clicked link
                document.querySelector('.nav__link[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // for projects section animation
    if (window.scrollY >= doneSection.offsetTop - 400) {
        if (!started) {
            numbers.forEach((num) => startCount(num))
        }
        started = true
    }

    // for skills section animation
    if (window.scrollY >= aboutSection.offsetTop - 250) {
        spans.forEach(span => {
            span.style.width = span.dataset.width
        })
    }
}

// for projects section animation
function startCount(element) {
    let goal = element.dataset.goal
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}


// function scrollToElement(elementId) {
//     let element = document.getElementById(elementId);
//     element.scrollIntoView({ behavior: 'smooth', block: "start" });
// }



var menu = document.querySelector('.menu')
var isOpen = false

function toggle() {
    if (!isOpen) {
        menu.style.display = 'flex'
        isOpen = true
    }
    else {
        menu.style.display = 'none'
        isOpen = false
    }
}
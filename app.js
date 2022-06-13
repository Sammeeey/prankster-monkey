// variables
const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

// event listeners
// tutorial approach before https://youtu.be/mCQ1-iDSnto?t=838
// closedFace.addEventListener('click', () => {
//     if(openFace.classList.contains('open')) {
//         openFace.classList.add('active')
//         closedFace.classList.remove('active')
//     }
// })

// openFace.addEventListener('click', () => {
//     if(closedFace.classList.contains('closed')) {
//         closedFace.classList.add('active')
//         openFace.classList.remove('active')
//     }
// })

// own toggle approach
closedFace.addEventListener('click', () => {
    closedFace.classList.toggle('active')
    openFace.classList.toggle('active')
})

openFace.addEventListener('click', () => {
    openFace.classList.toggle('active')
    closedFace.classList.toggle('active')
})

openFace.addEventListener('mouseenter', () => {
    if(!openFace.classList.contains('hover')) {
        openFace.classList.add('hover')
    }
})
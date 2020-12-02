const changeSpan = document.querySelector('.mess-with-me')
changeSpan.style.fontSize = '3em'


const messBackground = document.querySelector('p.mess-with-me')
messBackground.style.backgroundColor = 'green'


const hideMe = document.querySelector('#hide-me-area')
hideMe.style.display = 'none'


const wideDino = document.querySelector('#triceratops')
wideDino.style.width = '324px'


const makeOrange = () => {
    changeSpan.style.color = 'orange'
}

changeSpan.addEventListener('click', makeOrange)


const redBorder = () => {
    wideDino.style.border = '3px solid red'
}

wideDino.addEventListener('click', redBorder)

const featheredDino = document.querySelector('#feathers')
const transparency = () => {
    featheredDino.style.opacity = 0.5
}

featheredDino.addEventListener('click', transparency)


// row of dino
const rowOfDino = document.querySelector('#row')
// the switch for button
const button = document.querySelector('#toggle')

const toggled = () => {  
    if (rowOfDino.style.backgroundColor === 'magenta') {
        rowOfDino.style.backgroundColor = 'white'
    } else {
        rowOfDino.style.backgroundColor = 'magenta'
    }
}

button.addEventListener('click', toggled)


const biggyDino = document.querySelector('#biggify')

const hoverBig = () => {
    biggyDino.style.width = '200px'
}

biggyDino.addEventListener('mouseover', hoverBig)


const makeSmall = function() {
    biggyDino.style.width = '162px'
}

biggyDino.addEventListener('mouseout', makeSmall)



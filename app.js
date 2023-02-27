const secondsContanier = document.querySelector('#seconds')
const minutesContanier = document.querySelector('#minutes')
const hoursContanier = document.querySelector('#hours')
const daysContanier = document.querySelector('#days')
const nextYearContanier = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContanier = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00 `)
nextYearContanier.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    secondsContanier.textContent = getTimeUnit(seconds) 
    minutesContanier.textContent = getTimeUnit(minutes) 
    hoursContanier.textContent = getTimeUnit(hours) 
    daysContanier.textContent = getTimeUnit(days) 
}


const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24 )
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60
    
    insertCountdownValues({ days, hours, minutes, seconds })

    
}

const handleCountdownDisplay  = () => {
    spinnerLoading.remove()
    countdownContanier.style.display = 'flex'

}

setTimeout(handleCountdownDisplay, 1000)



setInterval(updateCountdown, 1000)
const secondsContanier = document.querySelector('#seconds')
const minutesContanier = document.querySelector('#minutes')
const hoursContanier = document.querySelector('#hours')
const daysContanier = document.querySelector('#days')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00 `)

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24 )
    const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
    const minutes = Math.floor(difference / 1000 / 60 ) % 60
    const seconds = Math.floor(difference / 1000 ) % 60

    secondsContanier.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContanier.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContanier.textContent = hours < 10 ? '0' + hours : hours
    daysContanier.textContent = days < 10 ? '0' + days : days
}

setInterval(updateCountdown, 1000)
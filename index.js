const h1Tag = document.querySelector("h1")
const getDay = document.getElementById('day')
const getTime = document.getElementById('time')

const date = new Date()

const d = date.getDay()
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = daysOfTheWeek[d]
getDay.innerHTML=`<strong>Day : </strong> ${day}`

const t = date.getTime()

getTime.innerHTML=`<strong>Time : </strong> ${t}`

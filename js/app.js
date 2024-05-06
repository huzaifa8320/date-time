var current_Format = new Date()

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var today_Day = days[current_Format.getDay()]
var today_Hours = current_Format.getHours()
var today_Minutes = current_Format.getMinutes()
var today_Date = current_Format.getDate()
if (today_Date < 10) {
    today_Date = "0" + today_Date
}
var today_Month = current_Format.getMonth()

var today_Year = current_Format.getFullYear()

if (today_Minutes < 10) {
    today_Minutes = "0" + today_Minutes
}

var today_Second = current_Format.getSeconds()

if (today_Second < 10) {
    today_Second = "0" + today_Second
}

var convert = today_Hours % 12

if (convert == 0) {
    convert = 12
}

if (today_Hours >= 12) {
    var period = "Pm"
}

else if (today_Hours < 12) {
    var period = "Am"
}

document.getElementById("day").innerHTML = `Today is : ${today_Day}`

document.getElementById("date").innerHTML = `${today_Month + 1} : ${today_Date} : ${today_Year}`

document.getElementById("time").innerHTML = `${convert} ${period} : ${today_Minutes} : ${today_Second}`
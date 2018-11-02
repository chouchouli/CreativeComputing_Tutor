var timeHolder = document.querySelector("#time")
//timeHolder.innerHTML
// returns the text inside the element which has the id name "time"

//set the values
//timeHolder.innerHTML = "hello world!"

//timeHolder.innerHTML
//returns the string "hello world"
//timeHolder.innerHTML = 1>0

var date
var second
var minute
var hour


function updateTime(){

  date = new Date()
  minute = date.getMinutes()
  second = date.getSeconds()
  hour = date.getHours()


  timeHolder.innerHTML = hour+":" + minute+":" + second
  timeHolder.style.transform = "rotate(" + second * 6 + "deg)"

  if(second<20){
    timeHolder.style.color = "red"
  }else if (second <40){
    timeHolder.style.color = "blue"
  }else{
    timeHolder.style.color = "green"
  }
  console.log("1")

}

//updateTime()
setInterval(updateTime, 1000)



// returns true

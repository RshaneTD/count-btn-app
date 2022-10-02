
const soloEl = document.getElementById("mode-solo")
const btnEl = document.getElementById("modes")
const form = document.getElementById("form")
const count = document.getElementById("count")
let countdown; // stores the  timer
let player = {}
let player1 = new user()
let player2 = new user()
let seconds = 100
let start = false // to start the timer if true
function user (id,points){ //user account
   this.name = id
   this.score = points
}


soloEl.addEventListener('click',()=>{ //click the solo button
  formEl()
  const summit = document.getElementById("summit-btn")
  summit.addEventListener('click', (e)=>{
      formInput(e)
      setInterval
      countEl()
   })
})
set()

function formEl(){ // creating the form
   btnEl.innerHTML=""
   form.innerHTML = `
   <form action="">
      <input type="text" id="name" name="name">
      <button id="summit-btn">Summit</button>
   </form>
   `
}


function formInput(e){ // storing the input (username)
   e.preventDefault()
    player.id= document.getElementById("name").value
   

   player1.name=player.id
 
   form.innerHTML=" "
   count.innerHTML = `
   <div>
      <button id="btn">CLICK HERE</button>
      <button id="reset">reset</button>
   </div>

   <div id="count-btn"></div>
   `
}

function countEl(){ // the counting app
   const countBtn = document.getElementById("count-btn")
   const btn = document.getElementById("btn")
   const reset = document.getElementById("reset")
   const scores = document.getElementById("scores")
   

   //getting the value of number in localStorage
   
    btn.addEventListener("click", ()=>{ //click count
      let addOne = 1
       let number = JSON.parse(localStorage.getItem(player.id))
      player.points=number
      player1.score = player.points + addOne
      countBtn.innerHTML = `${number}`

      //btn.addEventListener("click", ()=>{
      
      number = number + addOne
      countBtn.innerHTML=`
         ${number}
      `
      
      localStorage.setItem(player.id, JSON.stringify(number))// storing the data
      start=true
  })

   reset.addEventListener("click", ()=>{ //resetting the click count 
      let reset=0
      seconds=100
      countBtn.innerHTML= `${reset}`
      timerEl.innerHTML=`00:` + seconds
      number = reset
      localStorage.setItem(player.id, JSON.stringify(number))
   })
}
 

function set(){ // timer countdown function
   if(start=true){
      const tim = document.createElement('div')
      timerEl.appendChild(tim)
      countdown= setInterval(()=>{
         seconds --
         tim.innerHTML=`00:` + seconds
         if(seconds === 70){
            clearInterval(countdown)
            scores.innerHTML=`
               <p>${player1.name}</p>
               <p>${player1.score}</p>
            `
         }
   
      },100)
   }
}


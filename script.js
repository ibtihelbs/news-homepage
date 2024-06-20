let myname = "ibtihel"
myname ="helllo"
console.log(myname)
const num= 52.5
console.log(num * 6)
console.log(7==9)
let x = null
console.log(x)
const names = ["youssef", "esra", "asma", "nour"]
for (let i = 0; i< names.length; i++){
  console.log(names[i])  
  console.log(names[i].length)
}
for (let i of names){
    console.log(i)
}

const person = {
    firstName:"yasmine",
    lastName: "Tebourski",
    school: 1
}
console.log(person)
console.log(person.lastName)
 
const students = [
    {
        firstName:"yasmine",
        lastName: "Tebourski",
        school: 1
    },{
        firstName:"dhia",
        lastName: "dachraoui",
        school: 5
    },{
        firstName:"khalil",
        lastName: "ben kram",
        school: 4
    }
]
if( students[0].firstName == "khalil"){
    console.log("it's khalil")
}else if ( students[0].firstName == "dhia"){
    console.log("it's dhia")    
}else{
    console.log("no found")
}
function add (num1, num2){
 return num1 +num2
}
console.log(add(1,5))
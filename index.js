// const person = {
//     firstName : "Sinclare",
//     lastName : "Henry",
//     fullName : function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// let complexArray = [
//     [
//       {
//         one: 1,
//         two: 2
//       },
//       {
//         three: 3,
//         four: 4
//       }
//     ],
//     [
//       {
//         a: "a",
//         b: "b"
//       },
//       {
//         c: "c",
//         d: "d"
//       }
//     ]
//   ];

// const parent = document.getElementById('parent')
// const child = document.getElementById('child')
// function removeFunction(){
//     parent.removeChild(child)
// }

// const parent = document.getElementById('parent')
// function createFunction(){
//     const child = document.createElement('h1')
//     child.innerHTML = "Hello World"
//     parent.appendChild(child)
// }

// const addB = document.getElementById('addB')
// function addBorder(){
//     const btn = document.getElementById('button')
//     if(addB.style.border=='4px solid black')
//     {
//         addB.style.border = "none"
//         btn.textContent = "Add Border"
//     }
//     else
//     {
//         console.log(addB.style.border = "4px solid black")
//         btn.textContent = "Remove Border"
//     }
// }

var child = document.getElementById('1')
const parent = document.getElementById('par')
if(child==parent.firstElementChild){
    document.getElementById('preBtn').style.display = "none"
}

function forward(){
    child.classList.add('fill')
    child = child.nextElementSibling
    child.classList.add('fill')
    child = child.nextElementSibling
    document.getElementById('preBtn').style.display = "block"
    if(child==parent.lastElementChild){
        document.getElementById('nxtBtn').style.display = "none"
        child.classList.add('fill')
    }
}

function previous(){
    if(child==parent.lastElementChild){
        document.getElementById('nxtBtn').style.display = "block"
        child.classList.remove('fill')
    }
    child = child.previousElementSibling
    child.classList.remove('fill')
    child = child.previousElementSibling
    child.classList.remove('fill')
    if(child==parent.firstElementChild){
        document.getElementById('preBtn').style.display = "none"
    }
}


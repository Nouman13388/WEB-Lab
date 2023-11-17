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

// var child = document.getElementById('1')
// const parent = document.getElementById('par')
// if(child==parent.firstElementChild){
//     document.getElementById('preBtn').style.display = "none"
// }

// function forward(){
//     child.classList.add('fill')
//     child = child.nextElementSibling
//     child.classList.add('fill')
//     child = child.nextElementSibling
//     document.getElementById('preBtn').style.display = "block"
//     if(child==parent.lastElementChild){
//         document.getElementById('nxtBtn').style.display = "none"
//         child.classList.add('fill')
//     }
// }

// function previous(){
//     if(child==parent.lastElementChild){
//         document.getElementById('nxtBtn').style.display = "block"
//         child.classList.remove('fill')
//     }
//     child = child.previousElementSibling
//     child.classList.remove('fill')
//     child = child.previousElementSibling
//     child.classList.remove('fill')
//     if(child==parent.firstElementChild){
//         document.getElementById('preBtn').style.display = "none"
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const addButton = document.getElementById("submitBtn");
//   const container = document.querySelector(".faq-container");

//   // Function to toggle the "active" class
//   function toggleActiveState(event) {
//     const card = event.currentTarget;
//     card.classList.toggle("active");
//   }

//   // Function to remove a card
//   function removeCard(event) {
//     const crossIcon = event.currentTarget;
//     const card = crossIcon.parentElement.parentElement; // Get the parent of the parent
//     card.remove();
//   }

//   // Add a click event listener to each card
//   const cards = document.querySelectorAll(".faq");
//   cards.forEach((card) => {
//     card.addEventListener("click", toggleActiveState);

//     // Add a click event listener to the cross icon to remove the card
//     const crossIcon = card.querySelector(".fa-times");
//     crossIcon.addEventListener("click", removeCard);
//   });

//   addButton.addEventListener("click", function () {
//     const newTitleInput = document.getElementById("faqTitle");
//     const newAnswerInput = document.getElementById("faqText");

//     const newTitle = newTitleInput.value;
//     const newAnswer = newAnswerInput.value;

//     if (newTitle && newAnswer) {
//       const newCard = document.createElement("div");
//       newCard.className = "faq";
//       newCard.innerHTML = `
//                 <h3 class="faq-title">${newTitle}</h3>
//                 <p class="faq-text">${newAnswer}</p>
//                 <button class="faq-toggle">
//                     <i class="fas fa-chevron-down"></i>
//                     <i class="fas fa-times"></i>
//                 </button>
//             `;

//       container.insertBefore(newCard, document.querySelector(".new-question"));
//       newTitleInput.value = "";
//       newAnswerInput.value = "";

//       // Add a click event listener to the new card
//       newCard.addEventListener("click", toggleActiveState);

//       // Add a click event listener to the cross icon to remove the card
//       const crossIcon = newCard.querySelector(".fa-times");
//       crossIcon.addEventListener("click", removeCard);
//     }
//   });
// });

// function add(num1, num2) {
//   return num1 + num2;
// }

// function callBack(num1, num2, callback) {
//   return callback(num1, num2);
// }

// console.log(callBack(10, 3, add));

// const data = () => {
//   return fetch(
//     "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(response);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       throw error;
//     });
// };

// console.log(data());

const postData = (user, score) => {
  return fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/",
    {
      method: "POST",
      body: JSON.stringify({
        user: user,
        score: score,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    })
    .then((data) => {
      console.log(data);
    });
};

postData("Sinclare", 100);
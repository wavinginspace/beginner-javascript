// Make a div

let divElement = document.createElement('div');

// add a class of wrapper to it

divElement.classList.add('wrapper');

// put it into the body

document.body.appendChild(divElement);

// make an unordered list

let myList = document.createElement('ul');

// add three list items with the words "one, two three" in them

let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');

listItem1.textContent = 'one';
listItem2.textContent = 'two';
listItem3.textContent = 'three';

myList.appendChild(listItem1);
myList.appendChild(listItem2);
myList.appendChild(listItem3);

// put that list into the above wrapper

divElement.appendChild(myList);

// create an image

let myImg = document.createElement('img');

// set the source to an image

myImg.src = 'https://cdn.shopify.com/s/files/1/0712/4751/products/BX7E-02E_High_Large_1200x.jpg?v=1571438901';
// set the width to 250

myImg.width = '250';
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
divElement.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it

let myHTML = document.createElement('div');
let myP = document.createElement('p');
let myP2 = document.createElement('p');
myHTML.appendChild(myP);
myHTML.appendChild(myP2);

// put this div before the unordered list from above

myList.insertAdjacentElement('beforebegin', myHTML);

// add a class to the second paragraph called warning

myP2.classList.add('warning');
// remove the first paragraph

myP.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// function generatePlayerCard(name, age, height) {
// 	return `<div class="playerCard">
//   <h2>${name} — ${age}</h2>
//   <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
// 		3}. That would be a tall dog!</p>
// </div>`;
// }

// have that function return html that looks like this:

/* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */

function generatePlayerCard(name, age, height) {
	return `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
		3}. That would be a tall dog!</p>
</div>`;
}

// make a new div with a class of cards

let cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// document.body.appendChild(cardDiv);

// Have that function make 4 cards

let card1 = document.createElement('div');

let paulHTML = generatePlayerCard('paul', 33, `6'2`);

card1.innerHTML = `${paulHTML}`;
let cardsDiv = document.querySelector('.cards');
cardsDiv.appendChild(card1);

// let paulCard = function generatePlayerCard('paul', '33', '6\'2');
// let paulCard = function generatePlayerCard('paul', '33', '6\'2');

// append those cards to the div

// put the div into the DOM just before the wrapper element
// divElement.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

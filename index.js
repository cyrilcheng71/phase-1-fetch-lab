function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then (res => res.json())
  .then (json=> renderBooks(json));
}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});









// //DOM Render function
// function renderOneAnimal(animal){
//   //build Animal
//   let card = document.createElement("li")
//   card.className = "card"
//   card.innerHTML=` 
//     <img src ="${animal.image.Url}>
//     <div class= "content">
//       <h4>${animla.name}</h4>
//       <p>
//         $<span class="donation-count">${animal.donations}</span> Donated

//       <p>
//       <p>${animal.description}</p>
//     </div>
//     <div class="buttons">
//       <button> Donated $10 <button>
//       <button> set Fee </button>
    
//     `
  
// }

// //add animal card to DOM
// document.querySelector("anmial-list".appendChild(card))


// //Fetch 
// function getAllAnimals(){
//   fetch("http:/localhost:3000/animalData")
//   .then(res => res.json())
//   .then(data => animalData.forEach(animal => renderOneAnimal(animal)))
// }


// //intiial Render
// //Get data and redmer our animals to the dom
// function intiialize(){
//   getAllAnimals()

// //   animalData.forEach(animal => renderOneAnimal(animal))
//  }
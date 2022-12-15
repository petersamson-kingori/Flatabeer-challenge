// // // Code here

// >>>> function declarations <<<<<<<<<

// >>>> fetching from the database <<<<<<<<<
function getAllBeers(){
  fetch('http://localhost:3000/beers')
  .then(resp=>resp.json())
  .then(beers=>{
      console.log(beers)
  }
  )
}
// >>>> Display Names <<<<<<<<<
function getBeerName (){
  fetch('http://localhost:3000/beers')
  .then(resp=>resp.json())
  .then(beers=>{
    let beerName = document.getElementById("beer-name");
    beerName.textContent = beers[0].name
    // console.log(beerName);
  })
}

// >>>> Display img <<<<<<<<<
function getbeerImage (image_url){
  fetch('http://localhost:3000/beers')
  .then(resp=>resp.json())
  .then(beers=>{
    let img = document.getElementById("beer-image")
    img.src = image_url;


  })
}

// >>>> Display Description <<<<<<<<<
function getBeerDescription (){
  fetch('http://localhost:3000/beers')
  .then(resp=>resp.json())
  .then(beers=>{
    beerDescription = document.querySelector("#beer-description");
    beerDescription.textContent = beers[0].description;
    // console.log(beerDescription);



  })}

  // >>>> Display Reviews <<<<<<<<<
  function getBeerReviews (){
    fetch('http://localhost:3000/beers')
    .then(resp=>resp.json())
    .then(beers=>{
      let list = document.getElementById("review-list");
      items = list.getElementsByTagName("li");
      items[0].textContent = beers[0].reviews[0];
      items[1].textContent = beers[0].reviews[1];
      // console.log(items[0]);
      
    })}

  // >>>> Display Beer Menu <<<<<<<<<
  function getBeerMenu (){
    fetch('http://localhost:3000/beers')
    .then(resp=>resp.json())
    .then(beers=>{
      beerNames = beers.map((beer) => beer.name)
      let beerList = document.getElementById("beer-list")
      let beerItems = beerNames.map(name => `<li>${name}</li>`)
      beerList.innerHTML = beerItems.join('');

      })}

  // >>>> Display updated review <<<<<<<<<



let reviewList = document.getElementById("review-list");
let reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let review = reviewForm.elements.review.value;
  let newReview = document.createElement("li");

  newReview.textContent = review;

  reviewList.appendChild(newReview);
});

    






// >>>> function declarations <<<<<<<<<

// >>>> function invocations <<<<<<<<<
 
document.addEventListener("DOMContentLoaded",()=>{
  console.log("Content loaded");
  getAllBeers();
  getBeerReviews();
  getBeerName();
  getbeerImage("https://i.ibb.co/wQ4G0w1/flatiron-brew.png");
  getBeerDescription();
  
  getBeerMenu();
})   

// >>>> function invocations <<<<<<<<<


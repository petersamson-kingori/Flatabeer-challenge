



     // // // Code here

// // // >>>>fetching from the database

// document.addEventListener("DOMContentLoaded",()=>{
//   console.log("Content loaded");
//   getAllBeers()
// })

// function getAllBeers(){
//     fetch('http://localhost:3000/beers')
//     .then(resp=>resp.json())
//     .then(beers=>{
//         console.log(beers)
//     }
//     )
// }

// // let test = "Hello World. You can do it bruddadem";
// // console.log(test);

// function getFirstBeer(){
//   fetch('http://localhost:3000/beers')
//     .then(resp=>resp.json())
//     .then(beers=>{
//       let h2 = document.querySelector("#beer-name");
//       h2.textContent = `${beers[1].name}`
//       return h2
//     }
//     )
// }

// function getbeerImage(image_url){
//   fetch('http://localhost:3000/beers')
//   .then(resp=>resp.json())
//   .then(beers=>{
//     let img = document.querySelector("#beer-image");
//     img.src = image_url
//     img.alt = `${beers[0].name}`


//   }
    
//   )
// }

// function getBeerDescription(){
//   fetch('http://localhost:3000/beers')
//   .then(resp=>resp.json())
//   .then(beers=>{
//     let description = document.querySelector('#beer-description');
//     description.textContent = beers[0].description;
//     return description
    


//   } 
    
//   )
// }


// //remove existing lists
// let reviewList = document.querySelector("#review-list")
// let existingItem = document.querySelector('#review-list li');
// reviewList.removeChild(existingItem);

// //get review from database

// function getreview(){

//   fetch('http://localhost:3000/beers')
//   .then(resp=>resp.json())
//   .then(beers=>{
//     let newItem = document.createElement('li');
//      newItem.innerHTML = beers[0].reviews[0];
//      reviewList.appendChild(newItem)

//      return newItem
// }
// )
// }

// //remove existing lists
// reviewList = document.querySelector("#review-list")
// existingItem = document.querySelector('#review-list li');
// reviewList.removeChild(existingItem);

// //get review from database
// function getreview2(){

//   fetch('http://localhost:3000/beers')
//   .then(resp=>resp.json())
//   .then(beers=>{
//     let newItem = document.createElement('li');
//      newItem.innerHTML = beers[0].reviews[1];
//      reviewList.appendChild(newItem)

//      return newItem
// }
// )
// }



// function beersMenu(){
//   fetch('http://localhost:3000/beers')
//   .then(resp=>resp.json())
//   .then(beers=>{
//     let list = document.querySelector('#beer-list');
//     const beerNames = beers.map(beer => beer.name);
//     const beerMenu = beerNames;
    

//       list.innerHTML = '';
//       let item = document.createElement('<li>${</li>');
//         item.innerHTML = beerMenu;
//         list.appendChild(item);
    
//     });
    


  

//   }



// //Function Invocations

// beersMenu();
// // getAllBeerNames();
// getreview();
// getreview2();
// getFirstBeer();
// getBeerDescription();
// getbeerImage("https://i.ibb.co/wQ4G0w1/flatiron-brew.png");
// // getreview();



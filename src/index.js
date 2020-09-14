console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',function(){
  
<<<<<<< HEAD
  fetchImg();
=======
  // fetchImg();
>>>>>>> 55c1ee4f4d1b0506864599c9eb2689389675a91e
  fetchBreed();

})


function fetchImg(){
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(repo => repo.json())
  .then(json => createImg(json));
}

function createImg(imgs){
    // console.log(imgs);
    let divImg = document.getElementById('dog-image-container');
    imgs.message.forEach(img => {
        let newImg= document.createElement('img');
  newImg.src = img;
  divImg.appendChild(newImg);

    });
    
}

 function fetchBreed(){
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';
   fetch(breedUrl)
   .then(repo => repo.json())
   .then(json =>{ createBreed(Object.keys(json.message)),filterBreeds(Object.keys(json.message))})
 }

function createBreed(breeds){
      // console.log(breeds);
  let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => {
    let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  li.addEventListener('click',(e) => {
   li.style.color = "blue";
  });
  ul.appendChild(li);
    })
}

function filterBreeds(b){
    let dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change',(e) => {
     document.getElementById('dog-breeds').innerHTML = '';
<<<<<<< HEAD
    let filterB = b.filter(breed => breed.startsWith(e.target.value))
  
      createBreed(filterB);
=======
    let filterB = b.filter(breed => breed.startsWith(e.value))
     console.log(e.value);
      // createBreed();
>>>>>>> 55c1ee4f4d1b0506864599c9eb2689389675a91e
    })
}

// Create variables targetting the relevant DOM elements here 👇

//image, title, and tagline

var coverTitle = document.querySelector('.cover-title');
var descriptor1 = document.querySelector('.tagline-1');
var descriptor2 = document.querySelector('.tagline-2');
// var descriptors = document.querySelector('.tagline')

var homeButton = document.querySelector('.home-button');
var showRandomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoverButton = document.querySelector('.view-saved-button');
var makeNewCoverButton = document.querySelector('.make-new-button');
// var createNewBookButton = document.querySelector('.create-new-book-button');

var coverImage = document.querySelector('.cover-image');

var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// var savedCoverButton = document.querySelector('.save-cover-button');
// var makeNewButton = document.querySelector('.make-new-button');
var savedCoverSection = document.querySelector('.saved-covers-section');
var viewSavedView = document.querySelector('.saved-view');
// var coverImageMian = document.querySelector('.main-cover')

var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDescriptor1 = document.querySelector('#descriptor1');
var inputDescriptor2 = document.querySelector('#descriptor2');
var makeNewBookButton = document.querySelector('.create-new-book-button');


// var userCover = document.querySelector('.user-cover')

/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// We've provided a few variables below
var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
/**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Add your event listeners here 👇
addEventListener('load', showRandomCover);
showRandomCoverButton.addEventListener('click', showRandomCover);
makeNewCoverButton.addEventListener('click', showFormView);
saveCoverButton.addEventListener('click', saveMainCover);
viewSavedCoverButton.addEventListener('click', showSavedView);
homeButton.addEventListener('click', showHomeView);

makeNewBookButton.addEventListener('click', makeMyBook);
// viewSavedCoverButton.addEventListener('click', saveUserMadeCover);

/**~~~~~~~~~~~~~~~~~~~~provided coed~~~~~~~~~~~~~~~~~~~~~~~~ */
// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function makeOwnCover() {

}

// Create your event handlers and other functions here 👇
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~iteration 0 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function showRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)],
    coverTitle.innerText = titles[getRandomIndex(titles)],
    descriptor1.innerText = descriptors[getRandomIndex(descriptors)],
    descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~iteration 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
function showFormView() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  makeNewCoverButton.classList.remove('hidden');
  savedCoverSection.classList.add('hidden');
  savedView.classList.add('hidden');
};

function showHomeView() {
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  showRandomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  savedView.classList.add('hidden');
};

function showSavedView() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showRandomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  makeNewCoverButton.classList.remove('hidden');
  savedCoverSection.classList.remove('hidden');
  viewSavedView.classList.remove('hidden');
  showSavedCovers();
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Iteration 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// this fuction should put the cover into the saved covers array
function makeMyBook(event) {
  event.preventDefault();
  var userInputCover = createCover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value)
  savedCovers.push(userInputCover);

  coverImage.src = inputCover.value;
  coverTitle.innerText = inputTitle.value;
  descriptor1.innerText = inputDescriptor1.value;
  descriptor2.innerText = inputDescriptor2.value;
  // create a new variable for user created cover
  // assign it to the return from createcover function
  showHomeView()
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDescriptor1.value);
  descriptors.push(inputDescriptor2.vaule);
};
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Iteration 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/** - When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array
- If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)
- When a user clicks the “View Saved Covers” button, we should see the saved covers section
- All the covers in the savedCovers array should be displayed in the saved covers section */

function saveMainCover() {
  // console.log("this is the save main cover function")
  var randomGeneratedCover = createCover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText);
  savedCovers.push(randomGeneratedCover);

  // console.log(randomGeneratedCover);
  // console.log(savedCovers);

};

function showSavedCovers() {
  // make a function called showedSavedCovers
  savedCoverSection.innerHTML = '';
  // create a new var called newInnerHTML and assign it to an empty srting
  var newInnerHTML = '';
  // write a for loop that loops over the saved covers array  
  for (var i = 0; i < savedCovers.length; i++) {
    newInnerHTML += makeHTMLFromCover(savedCovers[i]);
  }
  // at each cover apened (+=) our new inner html variable the newInnerHTML variable
  // we need a function that can take a cover and return the proper HTML
  // reasign savedCoverSection.innerHTML to the variable called new newInnerHTML 
  savedCoverSection.innerHTML = newInnerHTML;
  var miniCoverElements = document.querySelectorAll('.mini-cover');
  console.log(miniCoverElements);
  // write a for loop that goes through each element
  // add eventlisteners to each mini cover element
  // assign a bdciclk event linteres to the mini covers
  // the will exicute a function 
  // go to event.currentTarget.id 
  // function will grave the id event.currentTarget.id similar to grabe a book from the library function
  // after the cover is detled invoke the savecover function one more time

  // clears the dom
  //
  // update the dom with the new array
};

function makeHTMLFromCover(cover) {
  var tagline1 = `<span class="tagline-1">${cover.tagline1}</span>`;
  var tagline2 = `<span class="tagline-2">${cover.tagline2}</span>`;
  var tagline = `<h3 class="tagline">A tale of ${tagline1} and ${tagline2}</h3>`;
  var title = `<h2 class="cover-title">${cover.title}</h2>`;
  var coverImage = `<img class="cover-image" src="${cover.coverImg}">`;
  var overlay = `<img class="overlay" src="./assets/overlay.png">`;
  var coverHTML = `<section class="mini-cover" id=${cover.id}>${coverImage}${title}${tagline}${overlay}</section>`;
  return coverHTML;
};

event.currentTarget.id


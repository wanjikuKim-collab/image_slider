let carousel = document.querySelector(".carousel");
let list = document.querySelector(".list");
let thumbnail = document.querySelector(".thumbnail");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let runningTime = document.querySelector('.time');


// Function for next button
next.onclick = function () {
  showSlider("next");
};

// Function for prev button
prev.onclick = function () {
  showSlider("prev");
};

// animation run time
let timeRunning = 3000;
let runTimeOut;

// automatic run time
let autoTime = 7000;
let runAutoTime = setTimeout(() => {
  next.click() // system automatically clicks the next button after 7s
}, autoTime);

function showSlider(direction) {
  let listItem = document.querySelectorAll(".carousel .list .item");
  let thumbnailItem = document.querySelectorAll(".carousel .thumbnail .item");

  if (direction === "next") {
    // The appendChild() method appends a node (element) as the last child of an element.
    list.appendChild(listItem[0]); //item in first position is moved last
    thumbnail.appendChild(thumbnailItem[0]);
    carousel.classList.add("next"); // this adds the next class to the carousel and implements the css style animations written for the next class
  } else {
    //When prev class on carousel is active and when prev button is clicked we use prepend method
    //The prepend method allows you to insert another element at the beginning of an element in JavaScript.
    list.prepend(listItem[listItem.length - 1]);
    thumbnail.prepend(thumbnailItem[thumbnailItem.length - 1]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeOut); //Each time the showSlider function is run, this ensures the countdown time always starts from the beginning
  runTimeOut = setTimeout(() => {
    // this will remove the next class from the carousel class
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoTime);
  runAutoTime = setTimeout(()=>{
    next.click()
  },autoTime)
}

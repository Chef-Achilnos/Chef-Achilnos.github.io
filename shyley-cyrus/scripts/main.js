let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shylur.jpg') {
      myImage.setAttribute('src','images/shyla2.jpg');
    } else {
      myImage.setAttribute('src','images/shylur.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to The Best of Both Purrlds, ' + myName;
    }
  }
myButton.onclick = function() {
    setUserName();
  }
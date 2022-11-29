document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {
  
  let submit = document.querySelector(".submit");
  let display = document.querySelector(".displayResult");
  let activity = document.querySelector(".activity");
  let age = document.querySelector(".age");
  let size = document.querySelector(".size");

  let imgSrc;
  let animal;
  let activityScore;
  let ageScore;
  let sizeScore;


  submit.onclick = function() {

    let userActivity = activity.value.toLowerCase();
    let userAge = age.value;
    let userSize = size.value.toLowerCase();

    if (userActivity === "run") {
      activityScore = 3; 
    } else if (userActivity === "walk") {
      activityScore = 2;
    } else if (userActivity === "sleep") {
      activityScore = 1; 
  } else {
    activityScore = 0;
  }

    if (userAge > 20) {
      ageScore = 3; 
    } else if (userAge <= 20 && userAge > 15) {
      ageScore = 2;
    } else if (userAge <= 15 && userAge > 0) {
      ageScore = 1;
    } else {
      ageScore = 0;
    }

  if (userSize === "large") {
      sizeScore = 1;
    } else if (userSize === "medium") {
      sizeScore = 2;
    } else if (userSize === "small") {
      sizeScore = 3;
    } else {
      sizeScore = 0;
    }

    let totalScore = Number(activityScore + ageScore + sizeScore);

  if (totalScore === 9) {
    animal = "Elephant";
    imgSrc = "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`;  
  } else if (totalScore === 8) {
  animal = "Lion";
  imgSrc = "https://nationalzoo.si.edu/sites/default/files/animals/africanlion-006_0.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`;
  } else if (totalScore === 7) {
  animal = "Tiger";
  imgSrc = "https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`;
    } else if (totalScore === 6) {
  animal = "Cheetah";
  imgSrc = "https://upload.wikimedia.org/wikipedia/commons/0/09/TheCheethcat.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`;
    } else if (totalScore === 5) {
  animal = "Rhino";
  imgSrc = "https://img4.goodfon.com/wallpaper/nbig/7/54/melkii-nosorozhek-nosorog-detionysh-biagit-nebo.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`;
    } else if (totalScore < 5 && totalScore > 0) {
  animal = "Cat";
  imgSrc = "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg";
    display.innerHTML = `<h2>You are a ${animal}!</h2></br><img src="${imgSrc}">`; 
  } else {
    display.innerHTML = `<h2>Make sure to answer all of the questions. </h2>`;
  }

    
  };
}
const girlImage = document.querySelector('.advantages__image-top');
const circleImage = document.querySelector('.advantages__image-bottom');

function levitateGirl() { // функция которая заставляет девушку левитировать 
  girlImage.classList.toggle('levitating'); // вешаем дополнительный класс на изображение девушки 
  circleImage.classList.toggle('expanding'); // на изображение круга черного 
}

girlImage.addEventListener('animationend', (event) => { //вешаем событие
  if (event.animationName === 'levitate') { // если имя события levitate
    levitateGirl(); // тогда она левитирует
  }
});



let interval;
let secondInterval;
let tries = false;

function checkValidityValue() {
   const hours = document.querySelector('.timer__hours');
   const minutes = document.querySelector('.timer__minutes');
   const seconds = document.querySelector('.timer__seconds');
   const timerStartParagraph = document.querySelector('.timer__paragraph');
   if (hours.value > 23 || minutes.value > 59 || seconds.value > 59) {
      stopTimer();
      timerStartParagraph.textContent = 'Invalid time';
      timerStartParagraph.style.color = 'red';
      timerStartParagraph.classList.add('invalidShake');
      setTimeout(() => {
         timerStartParagraph.classList.remove('invalidShake');
      }, 200)
   } else {
      startTimer();
   }
}


function stopTimer() {
   clearInterval(interval);
   clearInterval(secondInterval)
   tries = false
}

function startTimer() {
   const hours = document.querySelector('.timer__hours');
   const minutes = document.querySelector('.timer__minutes');
   const seconds = document.querySelector('.timer__seconds');
   const timerStartParagraph = document.querySelector('.timer__paragraph');
   if (tries === false) {
      if (hours.value !== '' || minutes.value !== '' || seconds.value !== '') {
         tries = true;
         interval = setInterval(() => {
            timerStartParagraph.style.color = 'black';
            if (seconds.value > 0) {
               seconds.value--;
            } else if (minutes.value > 0) {
               seconds.value = 59;
               minutes.value--;
            } else if (hours.value > 0) {
               seconds.value = 59;
               minutes.value = 59;
               hours.value--;
            } else {
               seconds.value = 59
               minutes.value = 59
               hours.value = 23
               stopTimer()
            }
            const formattedHours = hours.value < 10 ? `0${hours.value}` : hours.value;
            const formattedMinutes = minutes.value < 10 ? `0${minutes.value}` : minutes.value;
            const formattedSeconds = seconds.value < 10 ? `0${seconds.value}` : seconds.value;
            timerStartParagraph.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
         }, 1000);
      }
   }

}

const buttonStart = document.querySelector('.timer__start_button');

buttonStart.addEventListener('click', () => {
   secondInterval = setInterval(checkValidityValue, 10)
});

const buttonStop = document.querySelector('.timer__stop_button');

buttonStop.addEventListener('click', () => {
   stopTimer();
});

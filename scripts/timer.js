


let interval;


function stopTimer() {
   clearInterval(interval);
}

function startTimer() {
   const hours = document.querySelector('.timer__hours');
   const minutes = document.querySelector('.timer__minutes');
   const seconds = document.querySelector('.timer__seconds');
   const timerStartParagraph = document.querySelector('.timer__paragraph');
   if (hours.value !== '' || minutes.value !== '' || seconds.value !== '') {
      interval = setInterval(() => {
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



const buttonStart = document.querySelector('.timer__start_button');

buttonStart.addEventListener('click', () => {
   startTimer()
});

const buttonStop = document.querySelector('.timer__stop_button');

buttonStop.addEventListener('click', () => {
   stopTimer()
})

// import flatpickr from 'flatpickr';
// import iziToast from 'izitoast';

// const inputEl = document.querySelector('#datetime-picker');
// const buttonEl = document.querySelector('[data-start]');
// const days = document.querySelector('[data-days]');
// const hours = document.querySelector('[data-hours]');
// const minutes = document.querySelector('[data-minutes]');
// const seconds = document.querySelector('[data-seconds]');

// let intervalId = null;
// let userSelectedDate = '';
// let nowTime = Date.now();
// let corectDate = new Date(nowTime);
// let nowHours = corectDate.getHours();
// let nowMinutes = corectDate.getMinutes();
// let nowDays = corectDate.getDate();

// buttonEl.disabled = true;

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }

// const timeObj = {
//   seconds: 59,
//   minutes: '',
//   hours: '',
//   days: '',
// };

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     clearInterval(intervalId);
//     timeObj.seconds = 59;
//     timeObj.minutes = '';
//     timeObj.hours = '';
//     timeObj.days = '';
//     userSelectedDate = inputEl.value;
//     let userSelectedDateUnix = new Date(userSelectedDate);
//     if (userSelectedDateUnix.getTime() <= Date.now()) {
//       buttonEl.disabled = true;
//       iziToast.error({
//         title: 'Error',
//         titleColor: 'white',
//         message: 'Please choose a date in the future',
//         messageColor: 'white',
//         backgroundColor: 'red',
//       });
//     } else {
//       buttonEl.disabled = false;
//       timeObj.minutes = parseInt(userSelectedDate.slice(14, 16)) - nowMinutes;
//       timeObj.hours = parseInt(userSelectedDate.slice(11, 13)) - nowHours;
//       timeObj.days = parseInt(userSelectedDate.slice(8, 10)) - nowDays;
//       console.log(timeObj);
//     }
//   },
// };
// flatpickr('#datetime-picker', options);
// buttonEl.addEventListener('click', timer);
// function timer() {
//   intervalId = setInterval(function f() {
//     buttonEl.disabled = true;
//     console.log(timeObj);
//     seconds.innerHTML = timeObj.seconds;
//     minutes.innerHTML = timeObj.minutes;
//     hours.innerHTML = timeObj.hours;
//     days.innerHTML = timeObj.days;
//     timeObj.seconds -= 1;
//     if (timeObj.seconds === -1) {
//       timeObj.minutes -= 1;
//       timeObj.seconds = 59;
//     } else if (timeObj.minutes === -1) {
//       console.log((timeObj.hours -= 1));
//       timeObj.mins = 59;
//     } else if (timeObj.hours === -1) {
//       timeObj.days -= 1;
//       timeObj.hours = 23;
//     } else if (
//       timeObj.days === 0 &&
//       timeObj.hours === 0 &&
//       timeObj.minutes === 0 &&
//       timeObj.seconds === 0
//     ) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }
// import flatpickr from 'flatpickr';
// import iziToast from 'izitoast';

// const inputEl = document.querySelector('#datetime-picker');
// const buttonEl = document.querySelector('[data-start]');
// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');

// let intervalId;
// let userSelectedDate = '';
// let nowTime = Date.now();
// let correctDate = new Date(nowTime);
// let nowHours = correctDate.getHours();
// let nowMinutes = correctDate.getMinutes();
// let nowDays = correctDate.getDate();

// const timeObj = {
//   seconds: 59,
//   minutes: '',
//   hours: '',
//   days: '',
// };

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     clearInterval(intervalId);
//     resetTimeObject();
//     userSelectedDate = inputEl.value;
//     let userSelectedDateUnix = new Date(userSelectedDate);
//     if (userSelectedDateUnix.getTime() < Date.now()) {
//       buttonEl.disabled = true;
//       iziToast.error({
//         title: 'Error',
//         titleColor: 'white',
//         message: 'Please choose a date in the future',
//         messageColor: 'white',
//         backgroundColor: 'red',
//       });
//     } else {
//       buttonEl.disabled = false;
//       setTimeDifference(userSelectedDateUnix);
//     }
//   },
// };

// flatpickr('#datetime-picker', options);
// buttonEl.addEventListener('click', startTimer);

// function resetTimeObject() {
//   timeObj.seconds = 59;
//   timeObj.minutes = '';
//   timeObj.hours = '';
//   timeObj.days = '';
// }

// function setTimeDifference(userSelectedDateUnix) {
//   timeObj.minutes = parseInt(userSelectedDateUnix.getMinutes()) - nowMinutes;
//   timeObj.hours = parseInt(userSelectedDateUnix.getHours()) - nowHours;
//   timeObj.days = parseInt(userSelectedDateUnix.getDate()) - nowDays;
// }

// function updateTimerDisplay() {
//   daysEl.innerHTML = formatTime(timeObj.hours);
//   hoursEl.innerHTML = formatTime(timeObj.hours);
//   minutesEl.innerHTML = formatTime(timeObj.minutes);
//   secondsEl.innerHTML = formatTime(timeObj.seconds);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// function startTimer() {
//   intervalId = setInterval(updateTimer, 1000);
//   buttonEl.disabled = true;
// }

// function updateTimer() {
//   updateTimerDisplay();
//   timeObj.seconds -= 1;
//   if (timeObj.seconds === -1) {
//     timeObj.minutes -= 1;
//     timeObj.seconds = 59;
//   } else if (timeObj.minutes === -1) {
//     timeObj.hours -= 1;
//     timeObj.minutes = 59;
//   } else if (timeObj.hours === -1) {
//     timeObj.days -= 1;
//     timeObj.hours = 23;
//   }
// }
import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let intervalId = null;
let userSelectedDate = '';

buttonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    clearInterval(intervalId);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() < Date.now()) {
      buttonEl.disabled = true;
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        message: 'Please choose a date in the future',
        messageColor: 'white',
        backgroundColor: 'red',
      });
    } else {
      buttonEl.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);
buttonEl.addEventListener('click', startTimer);

function changeNumForTimer(timeObj) {
  daysEl.textContent = addZero(timeObj.days);
  hoursEl.textContent = addZero(timeObj.hours);
  minutesEl.textContent = addZero(timeObj.minutes);
  secondsEl.textContent = addZero(timeObj.seconds);
}

function addZero(value) {
  return value < 10 ? `0${value}` : value;
}

function startTimer() {
  intervalId = setInterval(() => {
    const TimeDifference = userSelectedDate.getTime() - Date.now();
    if (TimeDifference <= 0) {
      clearInterval(intervalId);
      buttonEl.disabled = false;
      iziToast.success({
        title: 'Success',
        titleColor: 'white',
        message: 'Countdown finished!',
        messageColor: 'white',
        backgroundColor: 'green',
      });
    } else {
      const timeObj = convertMs(TimeDifference);
      changeNumForTimer(timeObj);
    }
  }, 1000);
  buttonEl.disabled = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

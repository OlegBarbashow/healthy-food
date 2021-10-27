document.addEventListener('DOMContentLoaded', () => {

   // Tabs
   const tabs = document.querySelectorAll('.tabheader__item'),
       tabsContent = document.querySelectorAll('.tabcontent'),
       tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent() {
      tabsContent.forEach(item => {
         item.classList.remove('show', 'fade');
         item.classList.add('hide');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   function showTabContent(i = 0) {
      tabsContent[i].classList.remove('hide');
      tabsContent[i].classList.add('show', 'fade');

      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (e) => {
      const target = e.target;
      if(target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   })


   // Timer
   const deadLine = '2021-11-01';

   // Разница между deadLine и нашим текущим временем
   function getTimeRemaining(endtime) {
      const total = Date.parse(deadLine) - Date.parse(new Date()),
          days = Math.floor(total / (1000 * 60 * 60 * 24)),
          hours = Math.floor((total / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((total / 1000 / 60) % 60),
          seconds = Math.floor((total / 1000) % 60);

      return {
         'total': total,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      }
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`;
      } else {
         return num;
      }
   }
   
   function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timerInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const total = getTimeRemaining(endtime);

         days.innerHTML = getZero(total.days);
         hours.innerHTML = getZero(total.hours);
         minutes.innerHTML = getZero(total.minutes);
         seconds.innerHTML = getZero(total.seconds);

         if (total.total <= 0) {
            clearInterval(timerInterval);
         }
      }
   }

   setClock('.timer', deadLine);
   



















});
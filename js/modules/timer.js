function timer() {
    const deadLine = '2022-05-15';

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
}

export default timer;
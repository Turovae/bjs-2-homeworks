class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('ID не задан');
        }
        if (this.alarmCollection.some(elem => elem.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback,
        })
    }

    removeClock(id) {
        if (this.alarmCollection.some(elem => elem.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(elem => elem.id != id);
            return true;
        }
        return false;
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        hours = hours < 10 ? `0${hours}` : `${hours}`;
        let mins = currentTime.getMinutes();
        mins = mins < 10 ? `0${mins}` : `${mins}`;
        return(`${hours}:${mins}`);
    }

    start() {
        function checkClock(clock) {
            return clock.time === this.getCurrentFormattedTime();
        } 

        const checkClockBind = checkClock.bind(this);

        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(elem => {
                    if (checkClockBind(elem)) {
                        elem.callback();
                    }
                })
            }, 5000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarm => {
            console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
        })
    }

    clearAlarms() {
        if (this.timerId) {
            this.stop();
        }
        this.alarmCollection = [];
    }
}


//Пример использования класса AlarmClock
let alarm = new AlarmClock();

alarm.addClock("17:27", () => console.log("Будильник 1"), 1);

alarm.addClock("17:28", () => {
    console.log("Будильник 2");
     alarm.removeClock(2);
    }, 2); 

//alarm.addClock("10:00", () => console.log("Будильник 4"));
alarm.addClock("10:00", () => console.log("Будильник 4"), 1);
alarm.printAlarms();

alarm.addClock("17:29", () => {
    console.log("Будильник 3");
    alarm.clearAlarms();
    alarm.printAlarms();
}, 3);
alarm.printAlarms();

alarm.start();
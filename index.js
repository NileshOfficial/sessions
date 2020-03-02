window.onload = function () {
    setInterval(setDateTime, 1000);

    let greeting = document.getElementById("greeting");
    let time = document.getElementById("time");
    let date = document.getElementById("date");

    let monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];

    function prependZero(value) {
        return (parseInt(value / 10) === 0) ? ("0" + value) : value;
    }

    function getDateTime() {
        let dateTimeUtils = new Date();

        let hrs = dateTimeUtils.getHours();

        let format12Hr = get12hrClock(hrs);
        hrs = format12Hr.hour;

        let min = dateTimeUtils.getMinutes();
        let sec = dateTimeUtils.getSeconds();

        let time = `${prependZero(hrs)}:${prependZero(min)}:${prependZero(sec)}`;
        let date = `${prependZero(dateTimeUtils.getDate())} ${monthNames[dateTimeUtils.getMonth() - 1]} ${dateTimeUtils.getFullYear()}`;

        let greeting = getGreeting(format12Hr.hour, format12Hr.indicator);
        console.log(format12Hr);
        
        return [greeting, date, time, format12Hr.indicator];
    }

    function setDateTime() {
        let currentDateTime = getDateTime();
        greeting.innerHTML = currentDateTime[0]
        date.innerHTML = currentDateTime[1];
        time.innerHTML = currentDateTime[2] + ` ${currentDateTime[3]}`;
    }

    function get12hrClock(hour) {
        if (hour > 12)
            return {
                hour: hour - 12,
                indicator: "pm"
            }
        else if (hour >= 12)
            return {
                hour: hour,
                indicator: "pm"
            }
        else
            return {
                hour: hour,
                indicator: "am"
            }
    }

    function getGreeting(hr, indicator) {
        if(hr === 12)
            return "good afternoon";
        else if(indicator === "am" && hr >= 5 && hr < 12)
            return "good morning";
        else if(indicator === "pm" && hr >= 1 && hr < 4)
            return "good afternoon";
        else if(indicator === "pm" && hr >= 4 && hr < 10)
            return "good evening";
        else if(indicator === "pm" && hr >= 10)
            return "good night";
    }
}
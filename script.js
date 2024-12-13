let timer;
        let running = false;
        let milliseconds = 0;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        function start() {
            if (!running) {
                timer = setInterval(updateTime, 10);
                running = true;
            }
        }

        function stop() {
            clearInterval(timer);
            running = false;
        }

        function reset() {
            clearInterval(timer);
            running = false;
            milliseconds = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById('display').innerText = '00:00:00:000';
        }

        function updateTime() {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }
            let display = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds}`;
            document.getElementById('display').innerText = display;
        }
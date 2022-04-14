window.addEventListener('DOMContentLoaded', () => {

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    window.onload = function () {
        let i = 0;
        function timer () {
            const images = ['./images/server/ib-server1.png', './images/server/ib-server2.png']
            let randomImg = images[randomInt(0,1)]
            document.body.style.backgroundImage = `url(${randomImg})`
            i++;
            setTimeout(timer, 5000);
        }
        timer();
    }
});
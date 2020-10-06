const robot = require('robotjs');
const ioHook = require('iohook');

const max = 12;
const min = 6;
let clicker;

ioHook.on('keydown', event => {

    switch (event.keycode) {
        case 44:

            clicker = clicker ? false : true;

            if (!clicker) console.log("\x1b[33m" + 'AutoClicker ' + "\x1b[31m" + 'OFF');
            if (clicker) console.log("\x1b[33m" + 'AutoClicker ' + "\x1b[32m" + 'ON');

            function randomClick() {
                
                if (!clicker) return;

                let rand = Math.random() * (max - min) + min;

                setTimeout(() => {
                    robot.mouseClick();
                    randomClick();
                }, 1000 / rand);
            };

            randomClick();

            break;
    }
});

ioHook.start();
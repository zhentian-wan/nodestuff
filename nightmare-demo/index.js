const Nightmare = require('nightmare');
const path = require('path');

const nightmare = new Nightmare({
    show: true,
    frame: false
                                });

nightmare
    .goto('https://egghead.io')
    .viewport(640, 480)
    .wait(1000)
    .screenshot('./screenshots/640x480.png')
    .viewport(1280, 720)
    .wait(1000)
    .screenshot('./screenshots/1280x720.png')
    .end()
    .then(() => console.log("done"));

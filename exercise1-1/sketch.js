// code to play different cat audios depending on which key is pressed


function preload(){
    // load sounds
    soundFormats('wav');
    snore = loadSound('assets/196255__lolamadeus__snoring-cat.wav');
    purr1 = loadSound('assets/412016__skymary__cat-purring-and-meow.wav');
    purr2 = loadSound('assets/529605__chalicewell__katzenmix.wav');
}


function setup(){
    // setup canvas
    createCanvas(600, 600);
}

function keyPressed(){
    // whichever key is pressed, play the corresponding audio
    if (key === '1'){
        snore.play();
    }
    if (key === '2'){ 
        purr1.play();
    }
    if (key === '3'){ 
        purr2.play();
    }
    
}


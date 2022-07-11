function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'status-objects detecting...';
}

function modelLoaded(){
    console.log("modelLoaded");
    status - true;
    objectdetector.detect(img, gotResult);
}

function preload(){
    img = loadImage('Puppy.jpg');
}

function draw(){
    image(img, 0, 0, 500, 500);
    fill("blue");
    text("DOG", 50, 50);
    noFill();
    stroke("purple");
    rect(36, 60, 200, 200);

    fill("blue");
    text("CAT", 150, 100);
    noFill();
    stroke("purple");
    rect(150, 125, 200, 200);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else(console.log(results));
}
function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(650, 250);
    video = createCapture(VIDEO);
    video.hide();

 
}

function draw() {
    image(video, 0, 0, 640, 480);
    circle(36,37,70);
    circle(605,37,70);
    circle(605,445,70);
    circle(36,445,70);
    rect(65,70,510,-60);
    rect(65,475,510,-60);
    rect(3,65,70,355);
    rect(575,65,70,355);
}

function take_snapshot()
{
    save(' student_name.png');
}


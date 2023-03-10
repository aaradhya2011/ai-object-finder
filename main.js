status="";

function setup()
{
    canvas=createCanvas(380, 280);
    canvas.center();
    video=createCapture(380, 280);
    video.hide();
}

function start()
{
    objectDetector=ml5.objectdetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status="true";
}

function draw()
{
    video.size(380,280);
    canvas=createCanvas(380,280);
}
noseX= 0;
noseY= 0;
rightWristX= 0;
leftWristX=0;
difference= 0;



function setup()
{
    canvas= createCanvas(400, 400);
    canvas.position(700, 100);

    video=createCapture(VIDEO);
    video.size(550, 500);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
     console.log('pose net is initinalized');
}
function draw()
{
    background('#34e5eb');
    document.getElementById("square_side").innerHTML= "width and height of a square will be" + difference + "px";
    fill("#5ca832");
    stroke("#5ca832");
    square(noseX, noseY, difference);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX="+ noseX+"noseY="+ noseY);

        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(leftWristX- rightWristX);
        console.log("leftWristX="+leftWristX+"rightWrist="+rightWristX+"difference="+difference);

    }
    
}
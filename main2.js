text="Peter";

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,300);
    
    video.position(90,250);
     console.log("webcam loaded!");
    canvas= createCanvas(550,300);
    canvas.position(700,250);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}




function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftwristx="+leftWristX+"rightWristX"+rightWristX+"difference"+difference);

    }
}


function draw()
{
    background('#969A97');
    textSize(difference);
    fill('red');
    text(text,50,400);
}

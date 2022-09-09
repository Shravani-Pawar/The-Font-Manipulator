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

function draw()
{
    background('#969A97');
}


function gotPoses()
{
    if(results.length>0)
    {
        console.log(results);
    }
}
function preload()
{

}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();   

    p = ml5.poseNet(video, modelloaded);
    p.on("pose", gotposes);
}

function modelloaded()
{
    console.log("Model has successfully been loaded.")
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    }
    

function draw()
{

}

function save()
{

}
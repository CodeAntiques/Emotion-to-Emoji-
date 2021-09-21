Webcam.set( {width:400,
height:400,
img_format:'jpeg',
jpeg_quality:100} 
);
var camera = document.getElementById("camera")

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture"> ';
    })
}
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jnmlGoqCt/model.json",modeloaded)

function modeloaded(){
    console.log("model is loaded")
}


function check(){
    img = document.getElementById("capture")
    classifier.classify(img,gotResult)
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data_1="The First Prediction is" + prediction1
    speak_data_2=" And The Second Prediction is" + prediction2
var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
utterthis.rate=1;
utterthis.volume=1;
synth.speak(utterthis)
}

function gotResult(error,result){
    if (error) {
        console.error(error)
    }else{
        console.log(result);
document.getElementById("emotionname1").innerHTML=result[0].label
document.getElementById("emotionname2").innerHTML=result[1].label
prediction1=result[0].label
prediction2=result[1].label
speak();
if (result[0].label=="Sad") {
    document.getElementById("emoji1").innerHTML="&#x1F61E;"
}
if (result[0].label=="Happy") {
    document.getElementById("emoji1").innerHTML="&#x1F600;"
}
if (result[0].label=="Angry") {
    document.getElementById("emoji1").innerHTML="&#x1F620;"
}
if (result[1].label=="Sad") {
    document.getElementById("emoji2").innerHTML="&#x1F61E;"
}
if (result[1].label=="Happy") {
    document.getElementById("emoji2").innerHTML="&#x1F600;"
}
if (result[1].label=="Angry") {
    document.getElementById("emoji2").innerHTML="&#x1F620;"
}
    }
}
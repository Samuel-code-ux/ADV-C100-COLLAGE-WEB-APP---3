var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

setTimeout (function()
{
    img_id = "pic_jpg1.jpg";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

} , 5000);


setTimeout (function()
{
    img_id = "pic_jpg2.jpg";
    take_snapshot();
    speak_data = "Your selfie will be taken in next 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

} , 10000);


setTimeout (function()
{
    img_id = "pic_jpg3.jpg";
    take_snapshot();
    speak_data = "In 10 seconds your selfie will be taken. ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

} , 15000);

function take_snapshot()
{
    console.log(img_id);
    webcam.snap(function(data_uri){
        if(img_id=="pic_jpg1.jpg"){
            document.getElementById("result1").innerHtml = '<img id="pic_jpg1.jpg" src="'+data_uri+'"/>';
        }
        if(img_id=="pic_jpg2.jpg"){
            document.getElementById("result2").innerHtml = '<img id="pic_jpg2.jpg" src="'+data_uri+'"/>';
        } 
        if(img_id=="pic_jpg3.jpg"){
            document.getElementById("result3").innerHtml = '<img id="pic_jpg3.jpg" src="'+data_uri+'"/>';
        }
    })
}
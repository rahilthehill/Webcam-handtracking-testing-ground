const modelParams = {
    flipHorizontal: true,
    imageScaleFactor: 0.8,
    maxNumBoxes: 20,
    iouThreshold: 0.5, 
    scoreThreshold: 0.79,
}



navigator.getUserMedia = navigator.getUserMedia || 
navigator.mozGetUserMedia || 
navigator.webkitGetUserMedia || 
navigator.msGetUserMedia;

//dom element fetch
const video = document.querySelector('.video');
const canvas = document.querySelector('.canvas');
const audio = document.querySelector('#audio');
const context = canvas.getContext('2d');


let model 

handTrack.startVideo(video)
    .then(status => {
        if(status){
            navigator.getUserMedia({video: {}}, stream =>{

            video.srcObject = stream;
            setInterval(runDetection, 1);

            }, 
            
                err => console.log(err)
            );
        }
    })

    function runDetection(){
        model.detect(video)
            .then(prediction => {
                console.log(prediction);
                model.renderPredictions( prediction, canvas, context, video, label )

                if(prediction.label == "face"){
                    console.log(" FACE TRIGGERED")
                } else if (prediction.label == "closed") {

                    console.log(" HAND CLOSED TRIGGERED")
                } else if (prediction.label == "open") {

                    console.log(" HAND OPENED TRIGGERED")
                } else {
                    console.log(" NOTHING TRIGGERED")
                }
            });
    }

handTrack.load(modelParams )
    .then(lmodel => {
        model = lmodel;
    });

  
    
 

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nt6VqCZRR/model.json", modelready);
}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error,  results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255)+ 1;
        g = Math.floor(Math.random() * 255)+ 1;
        b = Math.floor(Math.random() * 255)+ 1;
        y = Math.floor(Math.random() * 255)+ 1;

        document.getElementById("label").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+ "%";

        document.getElementById("label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("confidence").style.color = "rgb("+r+","+g+","+b+")";
  
        img =document.getElementById("animal_images");
        
        if(results[0].label=="barking"){
            img.src = "dog-cartoon-colored-clipart-illustration-free-vector.jpg";
        }
        else if(results[0].label=="meowing"){
            img.src = "illustration-of-cute-colored-cat-cartoon-cat-image-in-format-suitable-for-children-s-book-design-elements-introduction-of-cat-to-children-book-or-poster-about-animal-free-pnf.webp";
        }
        else if(results[0].label=="roaring"){
            img.src = "posters-illustration-of-lion-cartoon-vector.jpg.jpg";
        }
        else if(results[0].label=="mooing"){
            img.src = "cartoon-cute-baby-cow-sirring-600w-2162378927.webp";
        }
        else {
            img.src = "listen.gif";
        }
            
        
    }
}
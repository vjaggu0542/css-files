let images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg']

let leftslide = document.querySelector(".left")
let rightslide = document.querySelector(".right")
let imagesid = 4;
let imag = document.getElementById("img")

leftslide.onclick = function(){
    imagesid = imagesid-1
    if(imagesid==0){
        leftslide.style.display = "none"
    }
    else{
        leftslide.style.display = "block" 
    }
    imag.setAttribute("src","images/"+images[imagesid])
    if(imagesid<images.length-1){
        rightslide.style.display = "block" 
    }
}

rightslide.onclick = function(){
    imagesid = imagesid+1
    if(imagesid==images.length-1){
        rightslide.style.display = "none"
    }
    else{
        rightslide.style.display = "block" 
    }
    imag.setAttribute("src","images/"+images[imagesid])
    if(imagesid>0){
        leftslide.style.display = "block" 
    }

}
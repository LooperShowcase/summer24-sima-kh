function realpic (){
 const id =Math.floor((Math.random()*6+1)*10000)
 
 return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}

const fakepic = "https://thispersondoesnotexist.com/";

 
const imgContainer = document.getElementById("images");
const rescontainer = document.getElementById("result");


function draw(){
  rescontainer.innerHTML = "";
  imgContainer.innerHTML  = ""; 
const resetbtn = document.createElement("button")
resetbtn.innerHTML = "try agian!"
resetbtn.onclick =draw

const rnd = Math.random()> 0.5
const arr = [rnd ,!rnd];

for(const  isReal of arr){
const img =document.createElement("img");
img.src = isReal? realpic() :fakepic;

img.onclick =function (){ 
 if(isReal){
   rescontainer.innerHTML = "crroect😍"
 }
 else{
    rescontainer.innerHTML = "Incrroect😒"
 }
  rescontainer.appendChild(resetbtn);  
}

imgContainer.appendChild(img);
}



}

draw();

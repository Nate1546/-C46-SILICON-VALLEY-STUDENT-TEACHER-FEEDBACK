//var press = 0;


var img_lake; var img_man; var img_dog;

var noRows=10; var noCols=10;

var item;
var pyramidA=[];
var pyramidx=50;
var pyramidy=410;

var bridgeA=[];
var bridgex=60;
var bridgey=425;

var crossingA=[];
var pyramid, bridge;

var health=500;
var progress=0;
var rescue=false;
//var delay=false;
var time;
function preload() {          
  img_background = loadImage("assets/bg.png");
  img_lake=loadImage("assets/lake.png");
  img_man=loadImage("assets/man.png");
  img_dog=loadImage("assets/dog1.png");
  img_rescue=loadImage("assets/man with dog1.png");
}  

function setup(){
    var canvas = createCanvas(1000,550);
    
    pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
    bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
    bridge.constBridge();
}
  
function draw() {
  background("cyan");
  image(img_background,10,10);
  lakeview();

  //  pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
  pyramid.constPyramid();
  //bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
  bridge.bridgeShow();
       
  mousePress();
  keyPress(); 
  
  progress=crossingA.length;//shows the no of tiles placed in the bridge 
  
  if (progress===10){//rescue--success
    rescue=true;
  }

  if (health<=0){//mision failed
    rescue="fail";
  }
  //console.log(rescue);
  message();
} 

function mousePress(){///Mouse Click is not counted as one !!!!!!!!
  if(mouseIsPressed){
    var nowMousex = mouseX;
    var nowMousey = mouseY;
    for(let i=0;i<noRows;i++){
      if(nowMousex>bridgeA[i].x-10 && nowMousex<bridgeA[i].x+10){
        if (nowMousey>bridgeA[i].y-15 &&nowMousey<bridgeA[i].y+15 ){
          crossingA[i]=bridgeA[i];
          crossingA[i].x=620;
        }
      }
    }
 //  delayR(500);  
  health=health-10;
  }
}

// function delayR(time){
//   delay=false;
//   var time1=millis();
//   while (delay===false){
//     var time2=millis();
//     if(time2-time1>time){
//       delay=true;  
//     }
//   }
// }

function keyPress(){
  textSize(25);
  stroke("yellow");
  fill(250,200,5);
  if(keyIsPressed){
    if(keyCode === LEFT_ARROW){
    
    }else if(keyCode === RIGHT_ARROW){
    
    }else if(keyCode === 32){
    text('Cross the Lake to Rescue the Pet Dog ...' ,355,125);
    text('Select one TILE from EACH ROW on Left ...',355,175);
    text('Start from bottom most ROW ...',355,225);
    text('CLICK MOUSE to Shift the Stones ...',355,275); 
    text('Make BRIDGE ... On the Lake ... ',355,325);
    text('Help the PET !',355,375);
    }
  }
}
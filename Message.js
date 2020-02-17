function  message(){
    textSize(25);
    stroke(25,10,5);  
    fill(0,0,255);
    text('Health:  '+ health +'  ...  TAKE CARE  !',25,25);
   
  if (rescue===false){
    text('Progress  :   '+ progress*10+ ' % ',80,90);
    text('Help the MAN to Cross the Lake  &  Rescue his PET DOG  ...',50,480);
    text('Make A  BRIDGE ... click MOUSE to Shift the Stones  ',50,525);
    text('ABOUT GAME ... PRESS SPACE ...',620,25);
  }else if(rescue===true ){
    text('Great ! Good Job ..  ',25,85);
    text('THANKS FOR HELPING THE MAN...  ',50,525);
  }else{
    textSize(30);
    stroke(25,10,5);  
    fill(0,0,255);
    text('Oh !  Please come back & Save the PET  & the MAN  ...!  ',50,500);
    
  }

}

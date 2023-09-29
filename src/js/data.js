import Gamer from "./gamer";

export const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
  };

  export const keyboards =new Set();
  
  export const gamer = {
    height:150,width:10,speed:{x:2,y:3}
    
  }
   
export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

export const gamer1 = new Gamer(0, 0, gamer.width, gamer.height);
export const gamer2 = new Gamer(
  canvas.width - gamer.width,
  0,
  gamer.width,
  gamer.height
);


   
  // Event Listeners
  addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  
  
   
  // Event Listeners
  addEventListener("keypress", (event) => {
    keyboards.add(event.code)
   
  });

  
  // Event Listeners
  addEventListener("keyup", (event) => {
    keyboards.delete(event.code)

    
  });
  
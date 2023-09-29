import ball from "./ball";
import { c, canvas, gamer, gamer1, gamer2, keyboards } from "./data";

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  ball.update();

  // Move gamer1 in y directions
  if (keyboards.has("KeyW")) {
    gamer1.velocity.y = -gamer.speed.y;
  } else if (keyboards.has("KeyS")) {
    gamer1.velocity.y = gamer.speed.y;
  } else {
    gamer1.velocity.y = 0;
  }

   // Move gamer1 in x directions
   if (keyboards.has("KeyA")) {
    gamer1.velocity.x = -gamer.speed.x ;
  } else if (keyboards.has("KeyD")) {
    gamer1.velocity.x = gamer.speed.x ;
  } else {
    gamer1.velocity.x = 0;
  }
 
  // Move gamer2 in y directions
  if (keyboards.has("KeyI")) {
    gamer2.velocity.y = -gamer.speed.y;
  } else if (keyboards.has("KeyK")) {
    gamer2.velocity.y = gamer.speed.y;
  } else {
    gamer2.velocity.y = 0;
  }

     // Move gamer2 in x directions
     if (keyboards.has("KeyJ")) {
      gamer2.velocity.x = -gamer.speed.x;
    } else if (keyboards.has("KeyL")) {
      gamer2.velocity.x = gamer.speed.x;
    } else {
      gamer2.velocity.x = 0;
    }

  gamer1.update();
  gamer2.update();
}

animate();

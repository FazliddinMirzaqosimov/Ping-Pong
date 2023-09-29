import { c, canvas, gamer, gamer1, gamer2 } from "./data";
import { randomIntFromRange } from "./utils";

function Ball(
  x,
  y,
  radius,
  color,
  velocity = {
    x:
      Math.random() < 0.5
        ? gamer.speed.x + Math.random()
        : -gamer.speed.x - Math.random(),
    y: Math.random() * 4 - 2,
  }
) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = JSON.parse(JSON.stringify(velocity));

  this.update = function () {
    this.velocity.x *= 1.0002;


    console.log(gamer1.x + gamer1.velocity.x);
    if (this.x > canvas.width || this.x < 0) {
      this.x = x;
      this.y = y;
      this.velocity = {
        x: 0,
        y: 0,
      };

      setTimeout(() => {
        this.velocity = JSON.parse(JSON.stringify(velocity));
      }, 2000);
      return;
    }
    if (this.y + this.radius > canvas.height || this.y < 0) {
      this.velocity.y = -this.velocity.y;
    }
    if (
      this.x + this.velocity.x - this.radius <
        gamer1.x + gamer1.velocity.x + gamer1.width &&
      gamer1.x +
        gamer1.velocity.x +
        gamer1.width -
        (this.x + this.velocity.x - this.radius) <
        -this.velocity.x + gamer1.velocity.x &&
      this.y + this.velocity.y > gamer1.y + gamer1.velocity.y &&
      this.y + this.velocity.y < gamer1.y + gamer1.height + gamer1.velocity.y
    ) {
      this.velocity.x = Math.abs(this.velocity.x);
    }else if (
      this.x + this.velocity.x + this.radius > gamer2.x + gamer2.velocity.x &&
      this.x + this.velocity.x + this.radius - (gamer2.x + gamer2.velocity.x) <
        this.velocity.x + gamer2.velocity.x &&
      this.y + this.velocity.y > gamer2.y + gamer2.velocity.y &&
      this.y + this.velocity.y < gamer2.y + gamer2.height + gamer2.velocity.y
    ) {
      this.velocity.x = -Math.abs(this.velocity.x);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  };
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
}

const ball = new Ball(canvas.width / 2, canvas.height / 2, 10, "white");

export default ball;

import { c, canvas, gamer1, keyboards } from "./data";

class Gamer {
  constructor(x, y, width = 30, height = 200, color = "white") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    if (
      (this.x + this.width + this.velocity.x < canvas.width / 3 &&
        this.velocity.x + this.x > 0) ||
      (this.x + this.width + this.velocity.x < canvas.width &&
        this.velocity.x + this.x > (canvas.width / 3) * 2)
    ) {
      this.x += this.velocity.x;
    }

    if (
      this.y + this.velocity.y + this.height < canvas.height &&
      this.y + this.velocity.y > 0
    ) {
      console.log(1);
      this.y += this.velocity.y;
    }

    this.draw();
  }
  draw() {
    c.beginPath();
    c.fillRect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }
}

export default Gamer;

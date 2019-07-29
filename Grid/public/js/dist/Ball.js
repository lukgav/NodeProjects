class Ball {
    constructor(canvas) {
        this.x = 300;
        this.y = 300;
        this.radius = 8;
        this.spdX = 10;
        this.spdY = 10;
        this.gravity = 9.8;
        this.mass = 10;
        this.force = this.mass * this.gravity;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.floor = canvas.scrollHeight;
        this.wall = canvas.scrollWidth;
    }
    ;
    updatePosition() {
        if (0 < this.x && this.x < this.wall) {
            this.x += this.spdX;
        }
        if (0 < this.y && this.y < this.floor) {
            this.y += this.spdY;
        }
    }
    updateSpeed() {
        // this.spdX -= this.
        if (this.y < this.floor) {
            this.spdY += this.gravity;
            console.log('test floor: ' + this.floor);
            console.log('Position ' + this.y);
            console.log('Speed: ' + this.spdY);
        }
        else if (this.y > this.floor) {
            console.log('test floor past');
            console.log('Speed at floor: ' + this.spdY);
            this.y = 0;
            this.spdY = -(this.spdY);
        }
    }
    update() {
        setInterval(() => {
            this.updatePosition();
            this.updateSpeed();
            this.DrawMe();
        }, 1000 / 25);
    }
    DrawMe() {
        this.context.arc(this.x, this.y, this.radius, 0, 10);
        this.context.stroke();
    }
}
//# sourceMappingURL=Ball.js.map
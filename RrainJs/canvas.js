const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Drop {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width-5;
        this.y = Math.random() * canvas.height - canvas.height-100;
        this.len = Math.random() * 20 + 10;
        this.speed = Math.random() * 4 + 2;
        this.width = Math.random() * 1.2;
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.reset();
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.len-2);
        ctx.strokeStyle = 'rgba(138, 43, 226, 0.8)';
        ctx.lineWidth = this.width;
        ctx.stroke();
    }
}

const drops = [];
const numberOfDrops = 500;

for (let i = 0; i < numberOfDrops; i++) {
    drops.push(new Drop());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const drop of drops) {
        drop.fall();
        drop.draw(ctx);
    }

    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

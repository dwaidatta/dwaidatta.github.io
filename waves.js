const canvas = document.getElementById('waves-bg');
const ctx = canvas.getContext('2d');
let width, height, t = 0;

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawWaves() {
  ctx.clearRect(0, 0, width, height);
  let waveColors = [
    'rgba(100,255,218,0.12)',
    'rgba(100,255,218,0.09)',
    'rgba(100,255,218,0.07)'
  ];
  for (let j = 0; j < 3; j++) {
    ctx.beginPath();
    for (let i = 0; i <= width; i += 2) {
      let amp = 18 + j * 12;
      let freq = 0.004 + j * 0.001;
      let y = Math.sin(i * freq + t * (0.8 + j * 0.3)) * amp + height * (0.55 + j * 0.08);
      ctx.lineTo(i, y);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = waveColors[j];
    ctx.fill();
  }
  t += 0.012;
  requestAnimationFrame(drawWaves);
}
drawWaves();

window.onload = function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  //Backgound is skyblue
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, 800, 500);

  // Sun
  ctx.beginPath();
  ctx.arc(100, 80, 50, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Ground 
  ctx.fillStyle = "green";
  ctx.fillRect(0, 400, 800, 100);

  // House
  ctx.fillStyle = "red";
  ctx.fillRect(300, 250, 200, 150);

  //Roof of house
  ctx.beginPath();
  ctx.moveTo(280, 250);
  ctx.lineTo(400, 150);
  ctx.lineTo(520, 250);
  ctx.closePath();
  ctx.fillStyle = "darkred";
  ctx.fill();

  //Door of house
  ctx.fillStyle = "brown";
  ctx.fillRect(375, 330, 50, 70);

  // Left window
  ctx.fillStyle = "lightblue";
  ctx.fillRect(315, 270, 60, 50);

  // Right window
  ctx.fillStyle = "lightblue";
  ctx.fillRect(425, 270, 60, 50);

  // Grass tufts using for loop with translate
  for (let i = 0; i < 15; i++) {
    ctx.save();
    ctx.translate(30 + i * 52, 400);

    // Draw one grass tuft
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(-8, -20);
    ctx.moveTo(0,0);
    ctx.lineTo(0, -25);
    ctx.moveTo(0,0);
    ctx.lineTo(8, -20);
    ctx.strokeStyle = "darkGreen";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}
}




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
}




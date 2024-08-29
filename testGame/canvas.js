

window.onload = function() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.src = 'car.png'; // Replace with the path to your image

  const rectWidth = 100; // Width of the image
  const rectHeight = 50; // Height of the image
  let rectX =0; // Initial x position
  let rectY = 100; // y position
  const speed = 1; // Speed of movement

  img.onload = function() {
      requestAnimationFrame(animateImage); // Start animation after image loads
  };


  
  function animateImage() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(img, rectX,rectY, rectWidth, rectHeight);
     // Draw the image

      rectX += speed; 
        
      if (rectX > canvas.width) {
          rectX = -rectWidth; 
         
            
          // Reset to start from the left
      }

      requestAnimationFrame(animateImage); // Request the next frame
  }
};


        // Get the canvas element and its context
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');

      
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        
        class Particle {
            constructor(x ,y,z,color){
                this.x = x;
                this.y = y;
                this.z = z;
                this.color = color;
                this.baseSize = 5; 
            }
        
            draw() {
                const scale = 1 / (1 + this.z / 100);  // Adjust scale based on Z value
                    const size = this.baseSize * scale;
                    const xPos = this.x  + canvas.width / 200;
                    const yPos = this.y  + canvas.height / 200;

                    ctx.fillStyle = this.color;
                    ctx.fillRect(xPos, yPos, size, size);
                  
                   
            };
            update() {
                this.z -= 0.5;  // Move particle closer to the viewer
                if (this.z <= 0) {
                    this.z = 100;  // Reset Z to simulate looping
                }
            }
        
        }
       


        let arrayWith = 400;
        let arrayHeight = 100;
      function animate() {
         
        ctx.clearRect(0, 0, canvas.width, canvas.height)
       let particleArray=[]
       for (let i = 0; i < arrayWith; i++) {
       for (let j = 0; j < arrayHeight; j++) {
            
            let red = Math.random() *255;
            let green = Math.random() *255;
            let blue = Math.random() *255;
            
        particleArray.push(new Particle(5*i,5*j,   Math.random() * 1000 ,`rgb(${red},${green},${blue})` ))
        
       }
        
       }
       particleArray.map(el=>{
        el.draw();
        el.update();
       })
      
     if(arrayHeight>= 100) {
        arrayHeight-= 10;
       };
       
       requestAnimationFrame(animate)
       
      }
      animate()

      
       
      

    //    for(let y = 0 ;y < canvas.height ;y += 1){
    //     for(let x = 0; x < canvas.width ; x += 1){
    //         const index = ( y * canvas.width + x ) * 4;
    //         const red = pixels[index];
    //         const green = pixels[index + 1];
    //         const blue = pixels[index + 2];
    //         const alpha = pixels[index + 3];
    //         const color = 'rgb('+red+',' + green + ',' + blue + ')';
    //         particleArray.push(new Particle(this,x,y,color));


    //     }
    // }
    // console.log(particleArray)
        
        

       
  

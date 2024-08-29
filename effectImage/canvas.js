window.onload = () => {
    const image = document.querySelector(".image");
   
   
   
    const cols= 20;
    const rows = 20;
    for (let i = 0; i < rows; i++) {
       
      
       for (let j = 0; j < cols; j++) {
        let span = document.createElement('span');
       
        span.classList.add(`mySpan`);
        span.style.width = 10+"px";
        span.style.height = 10+"px";
        const widthSpan = parseInt(span.style.width);
        const heightSpan = parseInt(span.style.height);
        span.style.backgroundPosition = `-${j * widthSpan}px -${i * widthSpan}px `;
        span.style.border=`1px solid`
        image.appendChild(span);
        
       }
      
              
       
    }
   
  };
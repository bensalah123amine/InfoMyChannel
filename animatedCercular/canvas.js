const circle = document.querySelector(".circle");
let numberLine=50
for (let i = 0; i < numberLine; i++) {
    let span = document.createElement('span');
    span.classList=`line ${i+1}`;
    span.style.setProperty('--i', i);
    let rotate = 360/numberLine 
    span.style.transform = `rotate(${i * rotate}deg) translateY(-80px)`;  
    // Rotate each line and center it
    span.style.animationDelay = i * 0.05+"s"
    circle.appendChild(span);

    
};


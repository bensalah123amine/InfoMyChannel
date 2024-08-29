function animateText(text, containerId, delayIncrement) {
  const textContainer = document.getElementById(containerId);

  // Clear any existing content
  textContainer.innerHTML = '';

  // Create letters as HTML elements
  for (let i = 0; i < text.length; i++) {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.textContent = text[i];
    textContainer.appendChild(letter);

    // Set the initial style for the animation
    // letter.style.transition = `none`;
    letter.style.transform = `translateY(20px)`;
    letter.style.opacity = '0';

    // Force a reflow to apply the initial styles
    letter.offsetWidth; // This line forces a reflow

    // Set the transition and final style
    letter.style.transition = `transform 1s ease ${i * delayIncrement}s, opacity 0.5s ease ${i * delayIncrement}s`;
    requestAnimationFrame(() => {
      letter.style.transform = 'translateY(1px)';
      letter.style.opacity = '1';
    });
  }
};

const textContainer = document.getElementById('text');

// Initial animation
animateText("HelloWorld!", "text", 0.1);

// Re-trigger animation on mouse enter
textContainer.addEventListener('mouseenter', () => {
  animateText("HelloWorld!", "text", 0.1);
});



// document.addEventListener('DOMContentLoaded', () => {
//   const textContainer = document.getElementById('text');
// const text = "Hello World!";
// textContainer.innerHTML = ''; 
  
//   // Create individual letter spans
//   for (let char of text) {
//     const letter = document.createElement('span');
//     letter.className = 'letter';
//     letter.textContent = char;
//     textContainer.appendChild(letter);
//   }
//   // const rect = textContainer.getBoundingClientRect();
//   // console.log(rect.x)

//   const letters = document.querySelectorAll('.letter');

//   textContainer.addEventListener('mousemove', (event) => {
//     const rect = textContainer.getBoundingClientRect();
   
//     const mouseX = event.clientX ;
//     const mouseY = event.clientY;
   

//     letters.forEach((letter, index) => {
//       const delay = index * 0.05;
//       letter.style.transitionDelay = `${delay}s`;
//       const offsetX = (mouseX ) / 20;
//       const offsetY = (mouseY ) / 20;
      
//       letter.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//     });
//   });

//   textContainer.addEventListener('mouseleave', () => {
//     letters.forEach((letter) => {
//       letter.style.transform = 'translate(0, 0)';
//       letter.style.transitionDelay = '0s';
//     });
//   });
// });






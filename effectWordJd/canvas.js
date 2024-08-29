

document.addEventListener("DOMContentLoaded",()=>{
    let canvas = document.querySelector('.canvas');
    let textcontent ='bensalah amine';
for (let i = 0; i < textcontent.length; i++) {
    let span = document.createElement('span');
    span.classList.add('text');
    // span.style.setProperty("--i",i+1);
    let marginLeft = i * 30+'px'
    span.style.left= marginLeft;
    span.textContent= textcontent[i];
    span.style.filter=`hue-rotate(${i*20}deg) `;
    canvas.appendChild(span)  
}
// mouse move
document.addEventListener('mousemove',e=>{
    gsap.to(".text",{
        x:e.clientX ,
        y:e.clientY,
       duration: 0.4,
        ease: "power2.out",
        stagger:0.05,
    })

})

})

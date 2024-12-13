
let total = 0;
document.querySelector("#total").textContent = total;


function updateTotal(price) {
    total += price;
    document.querySelector("#total").textContent = total;
}


document.querySelector("#image1").onclick = function() { updateTotal(899); };
document.querySelector("#image2").onclick = function() { updateTotal(1199); };
document.querySelector("#image3").onclick = function() { updateTotal(1299); };
document.querySelector("#image4").onclick = function() { updateTotal(990); };
document.querySelector("#image5").onclick = function() { updateTotal(1299); };
document.querySelector("#image6").onclick = function() { updateTotal(1500); };
document.querySelector("#image7").onclick = function() { updateTotal(549); };
document.querySelector("#image8").onclick = function() { updateTotal(129); };
document.querySelector("#image9").onclick = function() { updateTotal(499); };
document.querySelector("#image10").onclick = function() { updateTotal(254); };
 


 document.querySelector('.boom-button').addEventListener('click', function (e) {
    const button = e.currentTarget;

    
    button.classList.add('shake');
    setTimeout(() => button.classList.remove('shake'), 500);

   
    const particles = 300; 
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;  

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 500 + 50; 
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const rotate = Math.random() * 1440 + 'deg';

      
        particle.style.left = `${buttonX - 10}px`;
        particle.style.top = `${buttonY - 10}px`;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--rotate', rotate);

        document.body.appendChild(particle);

        
        requestAnimationFrame(() => particle.classList.add('animate'));

        
        particle.addEventListener('animationend', () => particle.remove());
    }
});
     document.querySelector(".boom-button").onclick = function () {
  
  localStorage.setItem("subtotal", total);
};


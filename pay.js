document.getElementById("paymentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const expiryMonth = document.getElementById("expiryMonth").value;
  const expiryYear = document.getElementById("expiryYear").value;
  const cvv = document.getElementById("cvv").value;
  const amount = document.getElementById("amount").value;
  const cardBalance = document.getElementById("cardBalance").value;
  const message = document.getElementById("message");
  const amountDisplay = document.getElementById("amountDisplay");
  const errorMessage = document.getElementById("errorMessage");

  
  amountDisplay.textContent = `Amount to be paid: $${amount}`;

  
  if (isNaN(amount) || amount <= 0) {
    errorMessage.textContent = "Invalid payment amount.";
    errorMessage.style.display = "block";
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

 
  if (isNaN(cardBalance) || cardBalance <= 0) {
    errorMessage.textContent = "Please enter a valid card balance.";
    errorMessage.style.display = "block";
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

  
  if (parseFloat(amount) > parseFloat(cardBalance)) {
    errorMessage.textContent = "Insufficient funds. Please enter a smaller amount.";
    errorMessage.style.display = "block"; 
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

 
  errorMessage.style.display = "none";
  message.style.color = "green";
  message.textContent = `Payment of $${amount} processed successfully!`;
});



window.onload = function () {
  
  const subtotal = localStorage.getItem("subtotal");

  
  if (subtotal) {
    document.getElementById("amount").value = subtotal; 
    document.getElementById("amountDisplay").textContent = `Amount to be paid: $${subtotal}`;
  }
};


document.getElementById("paymentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // جلوگیری از ارسال فرم

  const cardNumber = document.getElementById("cardNumber").value;
  const expiryMonth = document.getElementById("expiryMonth").value;
  const expiryYear = document.getElementById("expiryYear").value;
  const cvv = document.getElementById("cvv").value;
  const amount = document.getElementById("amount").value;
  const cardBalance = document.getElementById("cardBalance").value;
  const message = document.getElementById("message");
  const amountDisplay = document.getElementById("amountDisplay");
  const errorMessage = document.getElementById("errorMessage");

  // نمایش مقدار مبلغ
  amountDisplay.textContent = `Amount to be paid: $${amount}`;

  // بررسی مبلغ وارد شده
  if (isNaN(amount) || amount <= 0) {
    errorMessage.textContent = "Invalid payment amount.";
    errorMessage.style.display = "block";
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

  // بررسی موجودی کارت
  if (isNaN(cardBalance) || cardBalance <= 0) {
    errorMessage.textContent = "Please enter a valid card balance.";
    errorMessage.style.display = "block";
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

  // بررسی موجودی کافی برای پرداخت
  if (parseFloat(amount) > parseFloat(cardBalance)) {
    errorMessage.textContent = "Insufficient funds. Please enter a smaller amount.";
    errorMessage.style.display = "block"; 
    message.style.color = "red";
    message.textContent = ""; 
    return;
  }

  // اگر هیچ مشکلی وجود ندارد
  errorMessage.style.display = "none";
  message.style.color = "green";
  message.textContent = `Payment of $${amount} processed successfully!`;

  // انجام اثر انفجار (Boom Effect)
  triggerBoomEffect();
});

function triggerBoomEffect() {
  const button = document.querySelector("button[type='submit']");
  const rect = button.getBoundingClientRect();
  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;
  const particles = 300;

  // ایجاد ذرات انفجاری
  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50; 
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rotate = Math.random() * 720 + 'deg';

    particle.style.left = `${buttonX - 10}px`; 
    particle.style.top = `${buttonY - 10}px`; 

    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--dy', `${dy}px`);
    particle.style.setProperty('--rotate', rotate);

    document.body.appendChild(particle);

    requestAnimationFrame(() => particle.classList.add('animate'));

    particle.addEventListener('animationend', () => particle.remove());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const subtotal = localStorage.getItem("subtotal");
  if (subtotal) {
    document.getElementById("amount").value = subtotal;
    document.getElementById("amountDisplay").textContent = `Amount to be paid: $${subtotal}`;
  }
});



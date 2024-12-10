document.addEventListener("DOMContentLoaded", function() {
  const signInBtn = document.getElementById("signIn");
  const signUpBtn = document.getElementById("signUp");
  const firstForm = document.getElementById("form1");
  const secondForm = document.getElementById("form2");
  const container = document.querySelector(".container");

  signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  firstForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    window.location.href = "home.index.html";
  });

  secondForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "home.index.html";
  });
  const modal = document.getElementById("myModal");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const closeBtn = document.getElementsByClassName("close")[0];
  forgotPasswordLink.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
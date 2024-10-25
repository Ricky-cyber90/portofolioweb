// Show/Hide project details
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const details = this.nextElementSibling;
    details.classList.toggle("hidden");
    this.textContent = details.classList.contains("hidden")
      ? "Read More"
      : "Read Less";
  });
});

// Validate contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("All fields are required!");
      event.preventDefault();
    }
  });

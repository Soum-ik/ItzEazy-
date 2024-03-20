document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form input");
  const progressBar = document.querySelector(".progress-bar");

  // Function to update progress bar
  function updateProgressBar() {
    const filledInputs = Array.from(inputs).filter(
      (input) => input.value.trim() !== ""
    );
    const percentage = (filledInputs.length / inputs.length) * 100;
    progressBar.style.width = percentage + "%";
  }

  // Add event listeners to input fields
  inputs.forEach((input) => {
    input.addEventListener("input", updateProgressBar);
  });

  // Initial update of progress bar
  updateProgressBar();
});

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    const data = await response.json();
    adviceId.textContent = `ADVICE #${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceId.textContent = "Error";
    adviceText.textContent = "Could not fetch advice. Please try again.";
  }
}

diceButton.addEventListener("click", fetchAdvice);

// Fetch initial advice on page load
fetchAdvice();
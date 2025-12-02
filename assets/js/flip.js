document.addEventListener("DOMContentLoaded", () => {
  const frontendBtn = document.getElementById("bttn-frontend");
  const backendBtn = document.getElementById("bttn-backend");
  const fullstackBtn = document.getElementById("bttn-fullstack");

  const frontendCards = document.querySelector(".card-frontend");
  const backendCards = document.querySelector(".card-backend");
  const fullstackCards = document.querySelector(".card-fullstack");

  let activeCard = frontendCards;
  let isFlipping = false; // Prevent new flip action during animation
  
  activeCard.classList.add("active");

  function flipTo(newCard, type) {
    // Quit if same card pressed or flip continues
    if (activeCard === newCard || isFlipping) return;

    isFlipping = true;

    // Exit animation
    activeCard.classList.add(
      type === "horizontal" ? "flip-horizontal-out" : "flip-vertical-out"
    );
    activeCard.classList.remove("active");

    // After the animation is completed
    setTimeout(() => {
      // Remove old card
      activeCard.classList.remove("flip-horizontal-out", "flip-vertical-out");
      
      // Give new card login animation
      newCard.classList.add("active");
      newCard.classList.add(
        type === "horizontal" ? "flip-horizontal-in" : "flip-vertical-in"
      );

      // Clear after entrance animation completes
      setTimeout(() => {
        newCard.classList.remove("flip-horizontal-in", "flip-vertical-in");
        isFlipping = false;
        activeCard = newCard;
      }, 800);
    }, 800);
  }

  frontendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    flipTo(frontendCards, "horizontal");
  });

  backendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    flipTo(backendCards, "horizontal");
  });

  fullstackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    flipTo(fullstackCards, "vertical");
  });
});
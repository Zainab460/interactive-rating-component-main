class App {
  constructor() {
    this.$mainContent = document.querySelector(".content");
    this.$thanksContainer = document.querySelector(".thank-you");
    this.$submitBtn = document.querySelector("#submit-btn");
    this.$rateAgain = document.querySelector("#rate-btn");

    // rating
    this.$outOfRate = document.querySelector("#out-of");
    this.$rateHandler = document.querySelectorAll("#rating-numbers");

    this.addEventlisteners();
  }

  addEventlisteners() {
    this.$submitBtn.addEventListener("click", (e) => {
      this.handleQuality();
    });
    this.$rateAgain.addEventListener("click", (e) => {
      this.$thanksContainer.classList.add("hidden");
      this.$mainContent.style.display = "block";
    });
   
  }

  handleQuality() {
    this.$thanksContainer.classList.remove("hidden");
    this.$mainContent.style.display = "none";
    
    this.$rateHandler.forEach((rate) => {
      rate.addEventListener("click", (e) => {
        this.$outOfRate.innerHTML = rate.innerHTML;
      });
    });
  }
}

const app = new App();

// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Select and submit a number rating
// - See the "Thank you" card state after submitting a rating

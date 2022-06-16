const openRecipeHandler = async (event) => {
  const drinkId = event.target.getAttribute("data-drink-id");
  document.location.replace(`/recipe/${drinkId}`);
};

const submitReviewHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const review_content = document.querySelector("#review-text-area").value;
  const drink_id = event.target.getAttribute("data-drink-id");
  console.log(drink_id);

  if (review_content) {
    const response = await fetch("/api/reviews/", {
      method: "POST",
      body: JSON.stringify({
        review_content,
        drink_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the account page
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelectorAll(".drink").forEach((item) => {
  item.addEventListener("click", openRecipeHandler);
});

document
  .querySelector("#review-submit-button")
  .addEventListener("click", submitReviewHandler);

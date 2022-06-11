const newRecipeHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const drink_name = document.querySelector("#drink").value.trim();
  const instructions = document.querySelector("#drink_instructions").value;
  const liquid_id = document.querySelector("#liquid").value.trim();
  const is_alcoholic = $("#is_alcoholic").is(":checked") ? "true" : "false";

  if (drink_name && liquid_id && instructions) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/drinks/", {
      method: "POST",
      body: JSON.stringify({
        drink_name,
        is_alcoholic,
        liquid_id,
        instructions,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the account page
      document.location.replace("/account");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#new-recipe-button")
  .addEventListener("click", newRecipeHandler);

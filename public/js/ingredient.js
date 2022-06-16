const newIngredientHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector("#liquid").value.trim();
  const serving_size_oz = document.querySelector("#servingSize").value;
  const is_alcohol = $("#is_alcohol").is(":checked") ? "true" : "false";

  if (liquid && servingSize) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/drinks/ingredient", {
      method: "POST",
      body: JSON.stringify({ name, serving_size_oz, is_alcohol }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the search page
      document.location.replace("/search");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#new-ingredient-button")
  .addEventListener("click", newIngredientHandler);

const newRecipeHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const drink_name = document.querySelector("#drink").value.trim();
  const instructions = document.querySelector("#drink_instructions").value;
  const liquid_ids = getLiquidIds();
  const is_alcoholic = $("#is_alcoholic").is(":checked") ? "true" : "false";

  if (drink_name && liquid_ids && instructions) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/drinks/", {
      method: "POST",
      body: JSON.stringify({
        drink_name,
        is_alcoholic,
        liquid_ids,
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

function getLiquidIds() {
  const liquidList = document.getElementsByClassName("liquid-list");
  const liquid_ids = [];
  for (var i = 0; i < liquidList.length; i++) {
    if (liquidList[i].checked) {
      liquid_ids.push(liquidList[i].id);
    }
  }
  return liquid_ids;
}

document
  .querySelector("#new-recipe-button")
  .addEventListener("click", newRecipeHandler);

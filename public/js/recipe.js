const openRecipeHandler = async (event) => {
  const drinkId = event.target.getAttribute("data-drink-id");
  document.location.replace(`/recipe/${drinkId}`);
};

document.querySelectorAll(".drink").forEach((item) => {
  item.addEventListener("click", openRecipeHandler);
});

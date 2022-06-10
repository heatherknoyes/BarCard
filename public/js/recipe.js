var createRcpBtn = $('.create') // allows user to create recipes and add them to the dictionary
var searchRcpBtn = $('.search') // allows user to search existing drink recipes
var searchTextEl = $('.text') // the users entered text (desired drink search)
var submittedRecipesBtn = $('.submitted-recipes') // user views their submitted recipes


// Recipe Functions (lines 1-7)

async function createRecipe() { // with a pop-up modal, the users inputs into each field saves for each descriptor of the drink
    var drink_name = ''; // the id names here come from the modal values
    var drink_description = '';
    var drink_recipe = '';

    const result = await fetch('/api/searchrecipe', {
        method: 'POST',
        body: JSON.stringify({drink_name, drink_description, drink_recipe}),
        headers: { 'Content-Type': 'application/json' },
     });
}

async function displayRecipes() {
    const result = await fetch('/api/searchrecipe', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
     });
}

async function searchRecipe(userSearch) { // clarify route, variables, endpoint names
   const result = await fetch('/api/searchrecipe', {
       method: 'GET',
       body: JSON.stringify({userSearch}),
       headers: { 'Content-Type': 'application/json' },

    });
    console.log(result);
}

async function viewSubmittedRecipes() {
    const result = await fetch('/api/submitrecipe', {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' },
    });
 }
 
 async function viewSearchHistory() {
    const result = await fetch('/api/searchhistory', {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' },
    });
 }
 
 async function viewFavorites() {
    const result = await fetch('/api/favorites', {
       method: 'GET',
       headers: { 'Content-Type': 'application/json' },
    });
 }
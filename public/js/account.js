var accountInfoBtn = $('.account') // user can view their account info here
var searchHistoryBtn = $('.search-history') // allows user to view their search history
var favoriteDrinksBtn = $('.favorite-drinks') // allows user to view their favorite drinks
var submittedRecipesBtn = $('.submitted-recipes') // user views their submitted recipes

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

function deleteRecipes() {}

function updateRecipes() {}

function accountInfo() {
    // based on the user id saved in the database, you present the info of that user.
}

$(".account").on("click", function() {
    accountInfo();
})
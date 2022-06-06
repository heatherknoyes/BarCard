var shareRcpBtn = $('#share') // allows user to create recipes and add them to the dictionary
var searchRcpBtn = $('#search') // allows user to search existing drink recipes
var searchTextEl = $('#text') // the users entered text (desired drink search)
var accountInfoBtn = $('#account') // user can view their account info here

var submitButtonEl = $('#submit') // allows user to submit a comment
var userCommentEl = $('#comment') // 
var starEl = $('#star') // font awesome clickable stars
var reviewEl = $('#review') // element to append reviews to the body of the review page
var nthComment = 1; // increment for each new comment
var starRating = 0; // star ratings out of 5

function shareRecipe() {}

async function searchRecipe(userSearch) { // clarify route, variables, endpoint names
   const result = await fetch('/api/searchrecipe', {
       method: 'POST',
       body: JSON.stringify({userSearch}),
       headers: { 'Content-Type': 'application/json' },

    });
    console.log(result);

}


function accountInfo() {}

 
function showComment() {
   var reviews = JSON.parse(window.localStorage.getItem('reviews')) || []
   reviews.forEach(function (comment) {
      reviewEl.append(`<div class="box">`+ comment.userText + `</div>`)
      for (var x=0; x<comment.userStar; x++) {
         reviewEl.append(`<div class="fa fa-star checked"></div>`); 
       }
   });
}

showComment();
 
function makeReview(userText, userStar) {
   for(var i = 0; i <nthComment; i++){
       reviewEl.append(`<div class="box">`+ userText + `</div>`);     
   }
}

$('.fa').on('click', function () {
   var newstarRating = $(this).attr('id'); 
   starRating = newstarRating;
   $(this).addClass('checked');

   var array = [];
   $(this).siblings().each( function (id, el) {
      array.push(el.id)
      console.log(newstarRating);
      

      if(newstarRating>el.id){
         console.log(el.id);
         $(el).addClass('checked');

      } else if (newstarRating<el.id) {
         $(el).removeClass('checked');
      }
   })

   console.log(array);

   return starRating;
})
 
$("#submit").on("click", function() {
   var userText = $("#comment").val();
   var userStar = starRating; 
   
   if(starRating !=0 && userText !="") {
  var reviews = JSON.parse(window.localStorage.getItem('reviews')) || []
  var newRating = {
    userStar: userStar,
    userText: userText
  }
 
  reviews.push(newRating)
  window.localStorage.setItem("reviews", JSON.stringify(reviews));
  makeReview(userText, userStar);
   } else {
      window.alert('One of the fields you have entered is blank. You must submit a comment and leave a star rating.');   
   }
})

$("#search").on("click", function() {
    var userSearch = $("#text").val();
    searchRecipe(userSearch); // if you want to save previous searches per user, then use DB here.
})
 
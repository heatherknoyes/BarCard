var shareRcpBtn = $('#share')
var searchRcpBtn = $('#search')
var accountBtn = $('#account')

var submitButtonEl = $('#submit')
var userCommentEl = $('#comment')
var starEl = $('#star')
var reviewEl = $('#review')
var nthComment = 1;
var starRating = 0;

function shareRecipe() {}

function searchRecipe() {}

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
 
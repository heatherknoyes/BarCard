var submitButtonEl = $('.submit') // allows user to submit a comment
var userCommentEl = $('.comment')
var starEl = $('.star') // font awesome clickable stars
var reviewEl = $('.review') // element to append reviews to the body of the review page
var deleteCommentBtn = $('.delete') // allows user to delete a comment
var nthComment = 1; // increment for each new comment
var starRating = 0; // star ratings out of 5

// Rating and Review Functions

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
   for (var x=0; x<comment.userStar; x++) {
    reviewEl.append(`<div class="fa fa-star checked"></div>`); 
  }
}

// When the delete button is clicked, the corresponding comment is removed from local storage
$('.delete').on('click', function(comment) {
    var target = $(comment.currentTarget);
    var rowItem = target.parent();
    var dayEvent = {
        hour: rowItem.children(".hour").text(),
        event: rowItem.children(".event").val(),
      };

      if (calendarItems.length !== 0) {
        calendarItems = JSON.parse(localStorage.getItem("calendarItems"));
    
        if (eventExists(calendarItems, dayEvent)) {
          for (var i = 0; i < calendarItems.length; i++) {
            if (calendarItems[i].hour === dayEvent.hour) {
              calendarItems.splice(i, 1);
              rowItem.children(".event").val("");
              i = calendarItems.length;
            }
          }
        }
      }
    
      localStorage.setItem("calendarItems", JSON.stringify(calendarItems));
    });



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
 
$(".submit").on("click", function() {
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
});
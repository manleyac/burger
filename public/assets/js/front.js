$("#createBurger").on("submit", function(event) {
   event.preventDefault();

   var newBurger = {
     name: $("#inputBurger").val().trim()
   }

   $.ajax("/api/burgers", {
     type: "POST",
     data: newBurger
   }).then(
     function() {
       console.log("Added New Burger");
       location.reload();
     }
   );
 });
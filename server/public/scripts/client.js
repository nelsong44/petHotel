
$(document).ready(function() {
  console.log('JQ linked');
  //call displayPets() on page load to display pet and cust info on DOM
  displayPets();
});//end onReady

// Add click listeners for:

// Add new customer button
// AJAX: POST, url: "/pets/newCustomer"
// data to send to server: first_name, last_name

// Add new pet button
// AJAX: POST, url: "/pets/newPet"
// data to send to server: owner, name, breed, color

// Update pet button
// AJAX: PUT, url: "/pets" + id
// data to send: pet id with the url

// Delete pet button
// AJAX: DELETE, url: "/pets" + id

// Check in / check out button
// AJAX to mark checked in: PUT, url: "/pets/checkIn" + id
// data to send: pet id with the url

// AJAX to mark checked out: PUT, url: "/pets/checkOut" + id
// data to send: pet id with the url

// function to displayPets
function displayPets() {
  $.ajax({
    type: 'GET',
    url: '/pets/getPets', //pet and owner info from server
    success: function(response) {
      console.log(response); //receive: owner, name, breed, color
    }//end success
  });//end GET
}//end displayPets
// function to displayPets

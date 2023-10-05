// Update cart
function updatecart() 
{
  var price = document.getElementById("ticket_price").innerHTML;
  var quantity = document.getElementById("num").value;
  var total = parseFloat(price) * quantity
  if (!isNaN(total))
    document.getElementById("total").innerHTML = total
    document.getElementById("total-cart").innerHTML = total
}

// Delete cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    document.getElementById("total-cart").innerHTML = 0
  })
}

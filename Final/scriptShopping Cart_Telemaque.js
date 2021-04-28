// Callout for setting static rates. 
var taxRate = 0.07;
var fadeTime = 300;
   


/* Assign actions */
$('.quantitySelector select').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-price').text());
  });
  
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var total = subtotal + tax;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.click( function() {
    productRow.remove();
    recalculateCart();
  });
}



// Var and Constructors


// Item 1

document.getElementById("item1-name").innerHTML =

item1.productName

  document.getElementById("item1-description").innerHTML =

  item1.description 
  
  document.getElementById("item1-price").innerHTML =

  item1.price

  document.getElementById("item1-available").innerHTML =

  item1.available


  document.getElementById("item1-itemid").innerHTML =

  item1.itemid

  document.getElementById("item1-manufacturer").innerHTML =

  item1.manufacturer


  // Item 2

  document.getElementById("item2-name").innerHTML =

  item2.productName
  
    document.getElementById("item2-description").innerHTML =
  
    item2.description 
    
    document.getElementById("item2-price").innerHTML =
  
    item2.price
  
    document.getElementById("item2-available").innerHTML =
  
    item2.available
  
  
    document.getElementById("item2-itemid").innerHTML =
  
    item2.itemid
  
    document.getElementById("item2-manufacturer").innerHTML =
  
    item2.manufacturer


    // Item 3

    document.getElementById("item3-name").innerHTML =

    item3.productName
    
      document.getElementById("item3-description").innerHTML =
    
      item3.description 
      
      document.getElementById("item3-price").innerHTML =
    
      item3.price
    
      document.getElementById("item3-available").innerHTML =
    
      item3.available
    
    
      document.getElementById("item3-itemid").innerHTML =
    
      item3.itemid
    
      document.getElementById("item3-manufacturer").innerHTML =
    
      item3.manufacturer


        // Item 4

     document.getElementById("item4-name").innerHTML =

     item4.productName
     
       document.getElementById("item4-description").innerHTML =
     
       item4.description 
       
       document.getElementById("item4-price").innerHTML =
     
       item4.price
     
       document.getElementById("item4-available").innerHTML =
     
       item4.available
     
     
       document.getElementById("item4-itemid").innerHTML =
     
       item4.itemid
     
       document.getElementById("item4-manufacturer").innerHTML =
     
       item4.manufacturer


// Quantity button.
       $(function(){
        var $select = $(".quantitySelector");
        for (i=1;i<=5;i++){
            $select.append($('<option></option>').val(i).html(i))
        }
    });
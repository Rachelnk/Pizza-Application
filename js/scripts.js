function Pizza (typeP, size, crust, toppings, pizzanumber) {
  this.pizzaType=typeP
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaCount = pizzanumber;
  Pizza.prototype.fullDetails = function() {
    return this.typeP + "," + this.size + "," + this.crust + "," + this.toppings;
  }
  // this.pizzaDesc = [];
}
// function PizzaDetails (size, crust, toppings) {
//   this.pizzaSize = size;
//   this.pizzaCrust = crust;
//   this.pizzaTops = toppings;
//   // PizzaDetails.prototype.fullDetails = function() {
//   //   return this.typeP + "," + this.size + "," + this.crust + "," + this.toppings;
//   // }
// }
$(document).ready(function(){
  $("#pizza1image").click(function(){
    $("#pizza1detail").show();
    $("#pizza1image").hide();
  });
  $("#pizza2image").click(function(){
    $("#pizza2detail").show();
    $("#pizza2image").hide();
  });
  $("#pizza3image").click(function(){
    $("#pizza3detail").show();
    $("#pizza3image").hide();
  });
  $("#pizza4image").click(function(){
    $("#pizza4detail").show();
    $("#pizza4image").hide();
  });
  $("#pizza5image").click(function(){
    $("#pizza5detail").show();
    $("#pizza5image").hide();
  });
  $("#pizza6image").click(function(){
    $("#pizza6detail").show();
    $("#pizza6image").hide();
  });
  
  $("#pizzaorder").submit(function(event){
      event.preventDefault();

    var inputtedPizzaType = $("#pizzatype").val();
    var inputtedPizzaSize = $("#pizzasize").val();
    var inputtedPizzaCrust = $("#crust").val();
    var inputtedPizzaToppings = $("#toppings").val();
    var inputtedPizzaNumber =$ ("#numberofpizza").val();

    var newPizza = new Pizza(inputtedPizzaType, inputtedPizzaSize, inputtedPizzaCrust,inputtedPizzaToppings, inputtedPizzaNumber);

    $
    
   
    $(".item-one").text(newPizza.pizzaType);
    $(".item-two").text(newPizza.pizzaSize);
    $(".item-three").text(newPizza.pizzaCrust);
    $(".item-four").text(newPizza.pizzaTops);
    $()
    

    
  });

});
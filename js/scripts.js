function Pizza (typeP) {
  this.pizzaType=typeP
}
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
  $("#pizza7image").click(function(){
    $("#pizza7detail").show();
    $("#pizza7image").hide();
  });
  $("#pizza8image").click(function(){
    $("#pizza8detail").show();
    $("#pizza8image").hide();
  });
  $("#pizza9image").click(function(){
    $("#pizza9detail").show();
    $("#pizza9image").hide();
  });
  $("#pizzaorder").submit(function(){
    var inputtedPizzatype = $().val();
    var inputtedPizzaSize = $().val();
    var inputtedPizzaCrust = $().val();
    var inputtedPizzaToppings = $().val();
    
  });

});
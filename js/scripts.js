function Pizza (typeP, size, crust, toppings, pizzanumber, totalOrder) {
  this.pizzaType=typeP
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaCount = pizzanumber;
  this.orderPrice = totalOrder;
  Pizza.prototype.fullDetails = function() {
    return this.typeP + "," + this.size + "," + this.crust + "," + this.toppings;
  }

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
  
  $("#pizzaorder").submit(function(event){
      event.preventDefault();

    var inputtedPizzaType = $("#pizzatype").val();
    var inputtedPizzaSize = $("#pizzasize").val();
    var inputtedPizzaCrust = $("#crust").val();
    var inputtedPizzaToppings = $("#toppings").val();
    var inputtedPizzaNumber = $("#numberofpizza").val();

   

    //calculate total price of order
    let price;
    let totalPrice;
   switch (inputtedPizzaType) {
     case inputtedPizzaType = "hawaiian":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     case inputtedPizzaType = "bbqsteak":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     case inputtedPizzaType = "chickentikka":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     case inputtedPizzaType = "chickenmushroom":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     case inputtedPizzaType = "vegtikka":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     case inputtedPizzaType = "beefpepperoni":
     switch(inputtedPizzaSize) {
       case inputtedPizzaSize = "small":
       price = 500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      case inputtedPizzaSize = "medium":
        price = 850;
        if(inputtedPizzaCrust === "crispy") {
          totalPrice = (price * inputtedPizzaNumber) + 100
 
        } else if (inputtedPizzaCrust === "cheesestuffed") {
          totalPrice = (price * inputtedPizzaNumber) + 150;
        } else if (inputtedPizzaCrust === "glutenfree") {
          totalPrice = (price * inputtedPizzaNumber) + 200
        } else if (inputtedPizzaCrust === "flatbread") {
         totalPrice = (price * inputtedPizzaNumber) + 100
       }
       else {
         totalPrice = (price * inputtedPizzaNumber) + 200
       }
       break;
       case inputtedPizzaSize = "large":
       price = 1500;
       if(inputtedPizzaCrust === "crispy") {
         totalPrice = (price * inputtedPizzaNumber) + 100

       } else if (inputtedPizzaCrust === "cheesestuffed") {
         totalPrice = (price * inputtedPizzaNumber) + 150;
       } else if (inputtedPizzaCrust === "glutenfree") {
         totalPrice = (price * inputtedPizzaNumber) + 200
       } else if (inputtedPizzaCrust === "flatbread") {
        totalPrice = (price * inputtedPizzaNumber) + 100
      }
      else {
        totalPrice = (price * inputtedPizzaNumber) + 200
      }
      break;
      
     }
     break;
     
      
   };
   switch (inputtedPizzaToppings) {
     case inputtedPizzaToppings = "roastedtomatoes":
     totalPrice = totalPrice + 90 ;
     break;
     case inputtedPizzaToppings = "caramelizedonions":
     totalPrice = totalPrice + 90 ;
     break;
     case inputtedPizzaToppings = "bbqsauce":
     totalPrice = totalPrice + 150 ;
     break;
     case inputtedPizzaToppings = "spicy":
     totalPrice = totalPrice + 100 ;
     break;
   };
   var newPizza = new Pizza(inputtedPizzaType, inputtedPizzaSize, inputtedPizzaCrust,inputtedPizzaToppings, inputtedPizzaNumber, totalPrice);

   
    $(".item-one").text(newPizza.pizzaType);
    $(".item-two").text(newPizza.pizzaSize);
    $(".item-three").text(newPizza.pizzaCrust);
    $(".item-four").text(newPizza.pizzaTops);
    $(".item-five").text(newPizza.pizzaCount);
    alert(totalPrice);
    // $(".item-six").text(newPizza.totalPrice);
    

    
  });

});
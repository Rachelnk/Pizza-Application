// function Pizza (typeP, size, crust, toppings, pizzanumber, totalOrder) {
//   this.pizzaType=typeP
//   this.pizzaSize = size;
//   this.pizzaCrust = crust;
//   this.pizzaTops = toppings;
//   this.pizzaCount = pizzanumber;
//   this.orderPrice = totalOrder;
//   Pizza.prototype.fullDetails = function() {
//     return this.typeP + "," + this.size + "," + this.crust + "," + this.toppings;
//   }

// }
// $(document).ready(function(){
//   $("#pizza1image").click(function(){
//     $("#pizza1detail").show();
//     $("#pizza1image").hide();
//   });
//   $("#pizza2image").click(function(){
//     $("#pizza2detail").show();
//     $("#pizza2image").hide();
//   });
//   $("#pizza3image").click(function(){
//     $("#pizza3detail").show();
//     $("#pizza3image").hide();
//   });
//   $("#pizza4image").click(function(){
//     $("#pizza4detail").show();
//     $("#pizza4image").hide();
//   });
//   $("#pizza5image").click(function(){
//     $("#pizza5detail").show();
//     $("#pizza5image").hide();
//   });
//   $("#pizza6image").click(function(){
//     $("#pizza6detail").show();
//     $("#pizza6image").hide();
//   });
  
//   $("#pizzaorder").submit(function(event){
//       event.preventDefault();

//     var inputtedPizzaType = $("#pizzatype").val();
//     var inputtedPizzaSize = $("#pizzasize").val();
//     var inputtedPizzaCrust = $("#crust").val();
//     var inputtedPizzaToppings = $("#toppings").val();
//     var inputtedPizzaNumber = $("#numberofpizza").val();

   

//     //calculate total price of order
//     let price;
//     let totalPrice;
//    switch (inputtedPizzaType) {
//      case inputtedPizzaType = "hawaiian":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
//      case inputtedPizzaType = "bbqsteak":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
//      case inputtedPizzaType = "chickentikka":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
//      case inputtedPizzaType = "chickenmushroom":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
//      case inputtedPizzaType = "vegtikka":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
//      case inputtedPizzaType = "beefpepperoni":
//      switch(inputtedPizzaSize) {
//        case inputtedPizzaSize = "small":
//        price = 500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
//       case inputtedPizzaSize = "medium":
//         price = 850;
//         if(inputtedPizzaCrust === "crispy") {
//           totalPrice = (price * inputtedPizzaNumber) + 100
 
//         } else if (inputtedPizzaCrust === "cheesestuffed") {
//           totalPrice = (price * inputtedPizzaNumber) + 150;
//         } else if (inputtedPizzaCrust === "glutenfree") {
//           totalPrice = (price * inputtedPizzaNumber) + 200
//         } else if (inputtedPizzaCrust === "flatbread") {
//          totalPrice = (price * inputtedPizzaNumber) + 100
//        }
//        else {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        }
//        break;
//        case inputtedPizzaSize = "large":
//        price = 1500;
//        if(inputtedPizzaCrust === "crispy") {
//          totalPrice = (price * inputtedPizzaNumber) + 100

//        } else if (inputtedPizzaCrust === "cheesestuffed") {
//          totalPrice = (price * inputtedPizzaNumber) + 150;
//        } else if (inputtedPizzaCrust === "glutenfree") {
//          totalPrice = (price * inputtedPizzaNumber) + 200
//        } else if (inputtedPizzaCrust === "flatbread") {
//         totalPrice = (price * inputtedPizzaNumber) + 100
//       }
//       else {
//         totalPrice = (price * inputtedPizzaNumber) + 200
//       }
//       break;
      
//      }
//      break;
     
      
//    };
//    switch (inputtedPizzaToppings) {
//      case inputtedPizzaToppings = "roastedtomatoes":
//      totalPrice = totalPrice + 90 ;
//      break;
//      case inputtedPizzaToppings = "caramelizedonions":
//      totalPrice = totalPrice + 90 ;
//      break;
//      case inputtedPizzaToppings = "bbqsauce":
//      totalPrice = totalPrice + 150 ;
//      break;
//      case inputtedPizzaToppings = "spicy":
//      totalPrice = totalPrice + 100 ;
//      break;
//    };
//    var newPizza = new Pizza(inputtedPizzaType, inputtedPizzaSize, inputtedPizzaCrust,inputtedPizzaToppings, inputtedPizzaNumber, totalPrice);

   
//     $(".item-one").text(newPizza.pizzaType);
//     $(".item-two").text(newPizza.pizzaSize);
//     $(".item-three").text(newPizza.pizzaCrust);
//     $(".item-four").text(newPizza.pizzaTops);
//     $(".item-five").text(newPizza.pizzaCount);
//     alert("Your total price is " + totalPrice);
    

    
//   });

// });


$(document).ready(function(){
  //Creating a jquery effect  to open the hover effect on the Service page
  
   $("#delivery").submit(function () {

     var name = $("input#name").val();
     var number = $("input#number").val();
     var location = $("input#location").val();

     alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh Kshs. 200 Thank you for chosing  Olympus PizzaINN.");
     $("#delivery").trigger("reset");
     return false;

 });
 //Creating a function to validate the submit button on contact page
 var contactForm = $("#contact-form");

contactForm.on("submit", function(e) {
e.preventDefault();
let formValid = validateContactForm();
if (formValid) {
  const name = $("input.name").val();

  alert(`Thank you ${name}, we have received your message. Thank you for reaching out to us.`);
  clearForm();
}
});
function validateContactForm() {
 let isFormValid = true;
 const formInputs = contactForm.find("input,textarea");

 formInputs.each(function() {
     if (!$(this).val()) {
         $(this).addClass("is-invalid");
         isFormValid = false;
     }
 });
 return isFormValid;
}

function removeFormErrors() {
 contactForm.find("input,textarea").on("keydown", function() {
     if ($(this).hasClass("is-invalid")) {
         $(this).removeClass("is-invalid");
     }
 });
}

function clearForm() {
 contactForm.find("input,textarea").each(function() {
     $(this).val("");
 });
}

removeFormErrors();
 
});
var price , crust_price, topping_price ;
 let total = 0;
 function Getpizza( name,size,crust,topping, total ){
   this.name = name;
   this.size = size;
   this.crust = crust;
   this.topping = topping;
   this.total = total;
 }
 
 
 // proceed button
 $(document).ready(function(){
    $("button.proceed").click(function(event){
    let pname = $(".name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val());
    });
    console.log(ptopping.join(", "));
 
    switch(psize){
     case "0":
       price =0;
     break;
     case "large":
        price = 1200;
        console.log(price);
      break;
      case "medium":
        price = 850;
        console.log("The price is "+price);
      break;
      case "small":
        price = 600;
        console.log(price);
      default:
        console.log("error"); 
    }
    switch(pcrust){
       case "0":
         crust_price = 0;
       break;
       case "Crispy":
         crust_price = 200;
       break;
       case "Stuffed":
         crust_price = 250;
       break;
       case "Gluten-free":
         crust_price = 180;
       break;
       default:
         console.log("No price"); 
     }
     let topping_value = ptopping.length*50;
     console.log("toppins value" + topping_value);
 
     if((psize == "0") && (pcrust == "0")){
       console.log("nothing selected");
       $("button.proceed").show();
       $("#information").show();
       $("div.choise").hide();
       alert("Please select pizza size and crust"); 
     }
     else{
       $("button.proceed").hide();
       $("#information").hide();
       $("div.choise").slideDown(1000);
     }
 
     total = price + crust_price + topping_value;
     console.log(total);
     let checkoutTotal =0;
     checkoutTotal = checkoutTotal + total;
 
     $("#pizzaname").html($(".name option:selected").val());
     $("#pizzasize").html( $("#size option:selected").val());
     $("#pizzacrust").html($("#crust option:selected").val());
     $("#pizzatopping").html(ptopping.join(", "));
     $("#totals").html(total);
     
 // Add pizza button
     $("button.addPizza").click(function(){
       let pname = $(".name option:selected").val();
       let psize = $("#size option:selected").val();
       let pcrust = $("#crust option:selected").val();
       let ptopping = [];
       $.each($("input[name='toppings']:checked"), function(){            
           ptopping.push($(this).val());
       });
       console.log(ptopping.join(", "));
       switch(psize){
         case "0":
           price =0;
         break;
         case "large":
            price = 1200;
            console.log(price);
          break;
          case "medium":
            price = 850;
            console.log("The price is "+price);
          break;
          case "small":
            price = 600;
            console.log(price);
          default:
            console.log("error"); 
        }
        switch(pcrust){
           case "0":
             crust_price = 0;
           break;
           case "Crispy":
             crust_price = 200;
           break;
           case "Stuffed":
             crust_price = 150;
           break;
           case "Gluten-free":
             crust_price = 180;
           break;
           default:
             console.log("No price"); 
         }
         let topping_value = ptopping.length*50;
         console.log("toppins value" + topping_value);
         total = price + crust_price + topping_value;
         console.log(total);
 
         checkoutTotal = checkoutTotal + total;
         console.log(checkoutTotal);
       // constractor function
       var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);
 
       $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
       console.log(newOrder);
       
       
 
     });
     // Checkout button
     $("button#checkout").click(function(){ 
       $("button#checkout").hide();
       $("button.addPizza").hide();
       $("button.deliver").slideDown(1000);
       $("#addedprice").slideDown(1000);
       console.log("Your total bills is sh. "+checkoutTotal);
       $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
     });
 
     // home delivery button
     $("button.deliver").click(function(){
       $(".pizzatable").hide();
       $(".choise h2").hide();
       $(".delivery").slideDown(1000);
       $("#addedprice").hide();
       $("button.deliver").hide();
       $("#pizzatotal").hide();
       let deliveryamount= checkoutTotal+ 200;
       console.log("You will pay sh. "+deliveryamount+" on delivery");
       $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
     });
 
     // when one clicks place order button
     $("button#final-order").click(function(event){
       event.preventDefault();
 
       $("#pizzatotal").hide();
       $(".delivery").hide();
       $("button#final-order").hide();
       let deliveryamount= checkoutTotal+150;
       console.log("Final Bill is: "+deliveryamount);
       let person = $("input#name").val();
       let phone = $("input#phone").val();
       let location = $("input#location").val();
 
       if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
   
         $("#finallmessage").append(person+", we have recieved your order and will be delivered to you at "+location+ ". Total cost us kshs. "+deliveryamount);
         $("#totalbill").hide();
         $("#finallmessage").slideDown(1200);
       }
       else {
         alert("Please fill in the details for delivery!");
         $(".delivery").show();
         $("button#final-order").show();
       }
     });
    event.preventDefault();
   });
 });

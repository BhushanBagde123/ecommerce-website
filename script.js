let shop=document.querySelector("#shop");
let about=document.querySelector("#about");
let nav=document.querySelector("#nav");

let nav3=document.querySelectorAll(".nav3 ul");
let nav2=document.querySelectorAll(".nav2 a");
let nav1=document.querySelectorAll(".nav1 ul")
function navColorChange(){
shop.addEventListener("mouseover",function(){
    nav.style.backgroundColor="white";
    nav.style.borderBottom="2px solid black";
    nav.style.transition="0.1s";
    nav3.forEach(function(nav3) {
        nav3.style.color="black";
    });
    nav2.forEach(function(nav2){
        nav2.style.filter= "grayscale(100%) invert(100%)";
    })
    nav1.forEach(function(nav1) {
        nav1.style.color="black";
    });
    
})
shop.addEventListener("mouseout",function(){
    nav.style.backgroundColor="transparent";
    nav.style.borderBottom="none";
    nav3.forEach(function(nav3) {
        nav3.style.color="white";
    });
    nav2.forEach(function(nav2){
        nav2.style.filter= "brightness(0) invert(100%)";
    })
    nav1.forEach(function(nav1) {
        nav1.style.color="white";
    });
})

about.addEventListener("mouseover",function(){
    nav.style.backgroundColor="white";
    nav.style.borderBottom="2px solid black";
    nav.style.transition="0.1s ease-out";
    nav3.forEach(function(nav3) {
        nav3.style.color="black";
    });
    nav2.forEach(function(nav2){
        nav2.style.filter= "grayscale(100%) invert(100%)";
    })
    nav1.forEach(function(nav1) {
        nav1.style.color="black";
    });
    
})
about.addEventListener("mouseout",function(){
    nav.style.backgroundColor="transparent";
    nav.style.borderBottom="none";
    nav3.forEach(function(nav3) {
        nav3.style.color="white";
    });
    nav2.forEach(function(nav2){
        nav2.style.filter= "brightness(0) invert(100%)";
    })
    nav1.forEach(function(nav1) {
        nav1.style.color="white";
    });
})
}
navColorChange();
function shoppingCart(){


let shoppingCart=document.querySelector("#shoppingCart");
let shopContainer=document.querySelector(".shoppingCart");
let cross=document.querySelector(".cross");


shoppingCart.addEventListener("click",function(){
    // shopContainer.style. transform= "translateX(50%)";
    shopContainer.style.right="0%";
    shopContainer.style.transition="1s";
})
cross.addEventListener("click",function(){
    shopContainer.style.right="-100%";
    shopContainer.style.transition="1s";
})
}
shoppingCart();

function searchCart(){
    

let search=document.querySelector("#search");
let searchBar=document.querySelector(".searchBar");
let cross =document.querySelector("#cross");

search.addEventListener("click",function(){
    
    searchBar.style.right="0%";
    searchBar.style.transition="1s";
})
cross.addEventListener("click",function(){
    searchBar.style.right="-100%";
    searchBar.style.transition="1s";
})
}
searchCart();

let images=["hero1.webp","hero2.webp","hero3.webp","hero4.webp","hero5.webp"];
let hero=document.querySelector(".hero");
let previousButton=document.querySelector("#previous");
let nextButton=document.querySelector("#next");
let i=0;

nextButton.addEventListener("click",function(){
   
   if(i<=images.length-1){
    hero.style.backgroundImage=`url("${images[i]}")`;
    hero.style.transition="0.2s";
    i++;
    
  
   }
   else{
    i=0;
    nextButton.style.disabled="true";
    hero.style.backgroundImage=`url("hero2.webp")`
   }
//    console.log(i)
  
})

previousButton.addEventListener("click",function(){
   
    if(i>0){
     hero.style.backgroundImage=`url("${images[i]}")`;
     hero.style.transition="0.2s";
     i--;
     
   
    }
    else{
        i=images.length-1;
        nextButton.style.disabled="true";
        hero.style.backgroundImage=`url("hero4.webp")`;
       }
    // console.log(i)

   
 })

 let j=0;
setInterval(function(){
if(j<images.length){
     hero.style.backgroundImage=`url("${images[j]}")`;
     hero.style.transition="0.7s";
    j++;
    
}
else{
    j=0;
}
// console.log(j);
},1500)

let hamburgerButton=document.querySelector("#menu");
let menuContant=document.querySelector(".menuContant");
let menuCrossButton=document.querySelector("#menuCross")
hamburgerButton.addEventListener("click",function(){
    menuContant.style.left="0%";
    menuContant.style.transition="1s";
})
menuCrossButton.addEventListener("click",function(){
    menuContant.style.left="-100%";
    menuContant.style.transition="1s";
})

function shoppingCartButtons(){

let shoppingCart=document.querySelector(".div");
let previousShoppingButton=document.querySelector("#previousButton");
let nextShoppingButton=document.querySelector("#nextButton");
let CartWeigth=document.querySelector(".child").offsetWidth;

function updateNextButtonVisibility() {
    if (shoppingCart.scrollLeft >= shoppingCart.scrollWidth - shoppingCart.offsetWidth) {
      
        nextShoppingButton.style.display = "none";
        nextShoppingButton.style.transition="0.5s";
    } else {
       
        nextShoppingButton.style.display = "block";
        nextShoppingButton.style.transition="0.5s"; 
    }
}
function updatePriviousButtoVisibility() {
    if (shoppingCart.scrollRight <= shoppingCart.scrollWidth - shoppingCart.offsetWidth) {
      
        previousShoppingButton.style.display = "none";
        previousShoppingButton.style.transition="0.5s";
    } else {
       
        previousShoppingButton.style.display = "block";
        previousShoppingButton.style.transition="0.5s"; 
    }
}


nextShoppingButton.addEventListener("click",()=>{
    shoppingCart.scrollBy(CartWeigth,0);
    shoppingCart.style.transition="1s";
    updateNextButtonVisibility();
    updatePriviousButtoVisibility()
  
})

previousShoppingButton.addEventListener("click",()=>{
    shoppingCart.scrollBy(-CartWeigth,0);
    shoppingCart.style.transition="1s";
    updateNextButtonVisibility();
    updatePriviousButtoVisibility()
   
})

}



shoppingCartButtons();


function reviewChange(){
    let nextButton=document.querySelector("#rightButtonReview");
    let previousButton=document.querySelector("#leftButtonReview");
    let comment=document.querySelector("#heading");
    let paragraph=document.querySelector("#paragrap");
    let writer=document.querySelector("#writer");
    let dots=document.querySelectorAll(".dot");

     const info=[{comment:'"Excellent Pants"',para:'"These pants are exactly what I wanted; light fabric weight, good stretch, extremely packable, and slimmer fit than most tech pants. They’re perfect for travel, hiking, or casual outings. I immediately bought a second pair after getting my first."',sapn:"Bhushan Bagde"},
     {comment:'"Really innovative joggers"',para:'"These joggers are really next level. They are an amazing combo of soft, stretchy, and high performing. I like that they don’t have an elastic at the bottom hem as it makes them easier to cuff and gives them a slightly elevated look...you could easily wear these to a bar."',sapn:"Atif"},
     {comment:'"Amazing look and feel."',para:'"Feels super comfortable. I could wear these all day."',sapn:"Harshal"},
     {comment:'"AT Pants will be replacing all others in my closet!"',para:'"I,ve heard of Western Rise for a few years and friends have recommended the pants for travel, work, golf, and everything in between. I finally pulled the trigger on them and no surprise - as good and even better than expected"',sapn:"Jatin"},
     {comment:'"All I Wear"',para:'"I love these pants. They are perfect for long haul flights, meetings with sharp jacket and clomping around on weekends. Literally, only pants I will wear. Highly recommend."',sapn:"David M"}]
let i=0;
let j=0;
     nextButton.addEventListener("click",function(){
        console.log("click");
        if(i<info.length-1){
            i++;
        }
      else{
        i=0;
      }
      if(j<dots.length-1){
        j++;
      }
      else{
        j=0;
        
      }
      comment.textContent = info[i].comment;
      comment.style.transition="1s";
      paragraph.textContent = info[i].para;
      paragraph.style.transition="1s";
      writer.textContent = info[i].sapn;
      writer.style.transition="1s";
     
      dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === j ? "black" : "grey";
    });

     })

     previousButton.addEventListener("click",function(){
        if(i>0){
           i--;         
        }
      else{
        i=info.length-1;
      }
      if(j>0){
        j--;
      }
      else{
        j=dots.length-1;
        
      }
      comment.textContent = info[i].comment;
      comment.style.transition="1s";
      paragraph.textContent = info[i].para;
      paragraph.style.transition="1s";
      writer.textContent = info[i].sapn;
      writer.style.transition="1s";

      dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === j ? "black" : "grey";
    });


     })


}
reviewChange();



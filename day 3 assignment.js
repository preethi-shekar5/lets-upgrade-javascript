// question 1: create a webpage containing an image and three buttons 
//  a. on click of the second button a change the existing image to a new image 
// b. on click of the third button change it once again 
//  c. on click of first , the first image should come back 

 function image() {
      const ele = document.getElementById("image");
        ele.src = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/html-1024x341.png ";
        console.log("working")
 }
  function changeimage(){
      const element = document.getElementById("image");
       const newUrl = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/CSS-1024x341.png"
        element.src = newUrl;
      }
    function changeagain(){
        const eles =document.getElementById("image");
        const newurl ="https://media.geeksforgeeks.org/wp-content/cdn-uploads/javascript-1024x341.png";
        eles.src = newurl;
    }

// question2 : create a webpage containing two input fields and a button
//   a. write somthing in the first input 
//   b.on click of the button,the content of the input one should be copied in the second input

function paste(){
    const name= document.getElementsByClassName("class");
    name[1].value = name[0].value;
}


// question 3: create an array of object with objects having the following properties 
    //    a. {name(string) ,age(number), country(string),hobbies array(string[])}
    //  b. write a function to display all the objects on the console.


    let details =[
        {
            name:"preethi",
            age: 19,
            country: "india",
            hobbies:["dancing","fashion"],
        },
        {
            name:"mosh",
            age: 24,
            country: "usa",
            hobbies:["coading","blogging"],
        },
        {
            name:"karan",
            age: 32,
            country: "india",
            hobbies:["guitar","modeling"],
        },
           
    ]
       
        details.forEach(function (detail) {
         console.log(detail);
          });


// question 4 : following the 3rd question 
//  a.  write a function to display all the objects having age less than 30
//  b. write a function to display all the objects having country india
      
         function displayAge(){
             for(let i=0; i<details.length;i++){
             if(details[i].age<= 30){
                   console.log(details[i]);
             }
         }
        }
displayAge();


   function displaycountry(){
       for(let i=0;i<details.length;i++){
           if(details[i].country=="india"){

               console.log(details[i]); 
           }
       }
   }
displaycountry();

















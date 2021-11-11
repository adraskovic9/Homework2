var squares = document.getElementById("squares");
var delete_div = document.getElementById("delete");
var message = document.getElementById("messages");
function createSquare(){
   var input = squares.innerHTML;
    input += '<input class="square" />'
   squares.innerHTML = input;
  
   }


document.getElementById("form").addEventListener("submit",()=>{
            
            // Get user input
            var num_of_squares = document.getElementById("num_of_char").value;
            // Validate user input
            if(num_of_squares < 1){
                alert("Entered number must be bigger than 0");
                return;
            }
            // Create squares
            for(let i = 0; i < num_of_squares;i++){
                createSquare();
            }
   var inputs =  squares.getElementsByTagName("input");
   Array.from(inputs).forEach((inp)=>{
      inp.addEventListener("keyup",()=>{
          message.innerHTML = "";
          // function to check is palindrome
        var naiveReverse = function(string) {
            return string.split('').reverse().join('');
        }
            // Logic
        inp.style.color = "white";
         if(!(/^[a-zA-Z\s]*$/.test(inp.value))  ){
            inp.style.color = "red";
            alert("Invalid charachter");
         }
          if(inp.value == naiveReverse(inp.value)){
            var val = message.innerText;
            val += '<p class="palindrome">Word is palindrome</p>';
            message.innerHTML = val;
          }else{
            var val = message.innerText;
            val += '<p class="not_palindrome">Word is not palindrome</p>';
            message.innerHTML = val;
          }
       
      })
      
   })	

});

document.getElementById("add_square").addEventListener("click",()=>{
    createSquare();
});




let count=0;
     
     function take() {
            var RandomNumber = Math.floor(Math.random() * 10) + 5;
            var enter = document.querySelector("#enter");
            var bildiris;
            
            
            
            console.log(enter.value);
            console.log(RandomNumber);
            if(RandomNumber==enter.value){
            bildiris="Your Guess is Correct"
            }
            else if (RandomNumber < enter.value) {
            bildiris="Your Guess is HIGH"
            }
            else if (RandomNumber > enter.value) {
            bildiris="Your Guess is LOW"
            }

            if(RandomNumber==enter.value){
                document.getElementById("guessed").innerHTML=count;
                document.getElementById("number").innerHTML=enter.value;
            }

            document.getElementById("bildiris").innerHTML=bildiris;

            
            count=count+1;
            console.log(count);
            
        }
        

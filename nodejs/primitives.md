# Numbers, bits, & binary in the primitives

------------------------------------------------------------------------------------------------
## Check If A Number Is A Palindrome
   input : 
        number:  12321

- Approche 1 : with buildin functions (Array.prototype.reverse())
    Step1 : Convert number to string and create an array of string 
    Step2 : Array reverse and convert array to string 
    Step3 : Typecast string to number
    Step4 : if number equal to reverse number return true
    Step5 : else return false


- Approche 2 : without buildin functions
   Step1 : digits - get the length of the digits
   Step2 : mask - get the mask of the digit ()
   Step3 : Loop - iterate the loop length / 2 
           3.1 : firstDigit -  get first digist of the number (number / mask)
           3.2 : lastDigit - number % 10;
           3.3 : if firstDigit !== lastDigit -> return false (go to Step4)
           3.4 : number = number % mask 
           3.5 : number = number / 10
           3.6 : mask = mask / 100;  (Remove 2 0's from the mask)
    Step4: Loop End
    Step5 : return true

------------------------------------------------------------------------------------------------
## Sum of two binary numbers 

- Approche 1 : with buildin functions (parseInt(Num,2) and Number.toString(2))
    Step1 : Convert the binary to numeric number 
    Step2 : Sum of tow numeric number 
    Step3 : Convert the numeric number to Bynary

- Approche 2 : without buildin functions
    
------------------------------------------------------------------------------------------------
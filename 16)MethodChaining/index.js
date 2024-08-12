/* 
    Method Chaining = Calling one method after another
                      in one continuous line of code
 */

let userName = window.prompt("Enter your username: ");

 // -----  NO METHOD CHAINING   ------

/* 
 userName = userName.trim();
 let letter = userName.charAt(0);
 letter = letter.toUpperCase();

 let extraChars = userName.slice(1);
 extraChars = extraChars.toLowerCase();
 userName = letter + extraChars;

 console.log(userName);
 */

 // -----  METHOD CHAINING   ------

 /* 
 userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
 console.log(userName);
 */

 // Challange

let spaceCount = 0;
let lastPos = 0;
let statusV1 = true;
while(statusV1 == true){
    if(lastPos == userName.trim().indexOf(" ", lastPos))
        statusV1 = false;
    else{
        lastPos = userName.trim().indexOf(" ", lastPos);
        spaceCount++;
    }
        
}
    // Selçuk Mahmut Dinç
console.log(spaceCount);
userName =  userName.trim().charAt(0).toUpperCase() + 
            userName.trim().slice(1, userName.indexOf(" ") + 1).toLowerCase() + 
            userName.trim().charAt(userName.indexOf(" ") + 1).toUpperCase() + 
            userName.trim().slice(userName.indexOf(" ") + 2).toLowerCase();
console.log(userName);





let userName = "BroCode";
/* 
    .charAt(Integer Number) => gives a single chracter by index 
        console.log(userName.charAt(0)); // Output will be => B
    
    .indexOf("[char]") => gives first index number of char
        console.log(userName.indexOf("o"));
        
    .lastIndexOf("[char]") => gives last index number of char
        console.log(userName.lastIndexOf("o"));

    .length => gives total char number
        console.log(userName.length);

    .trim() => trim whitespace
        userName = "      BroCode           ";
        userName = userName.trim();
        console.log(userName);

    .toUpperCase() => all char will be UPPER case
        userName = userName.toUpperCase();
        console.log(userName);

    .toLowerCase() => all char will be lower case
        userName = userName.toLowerCase();
        console.log(userName);

    .repeat([Number]) => repeat as number 
        userName = userName.repeat(3);
        console.log(userName);

    .startsWith() => RETURN TYPE = boolean, check start char
        let userName = "BroCode";
        let result = userName.startsWith(" ");
        if(result)
            console.log("Your username can't begin with ' '");
        else
            console.log(userName);

    .endsWith() => RETURN TYPE = boolean, check end char
        let userName = "BroCode ";
        let result = userName.endsWith(" ");
        if(result)
            console.log("Your username can't end with ' '");
        else
            console.log(userName);

    .includes() => RETURN TYPE = boolean, contain char?
        let result = userName.includes(" ");
        if(result)
            console.log("Your username can't include ' '");
        else
            console.log(userName);
    
    .replaceAll([Contained Char], [Replace Char]) => replace the char
        let phoneNumber = "123-456-7654";
        phoneNumber = phoneNumber.replaceAll("-", "");
        console.log(phoneNumber);
    
    .padStart([Total Char Count], [Padding Char]) => padding start
        let phoneNumber = "123-456-7654";
        phoneNumber = phoneNumber.padStart(15, "0");
        console.log(phoneNumber);    
    
    .padEnd([Total Char Count], [Padding Char]) => padding end
        let phoneNumber = "123-456-7654";
        phoneNumber = phoneNumber.padEnd(15, "0");
        console.log(phoneNumber);

    */

let phoneNumber = "123-456-7654";
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);
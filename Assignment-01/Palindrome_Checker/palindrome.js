const input1 = prompt("Enter a word or number to check if it is a palindrome:");  //
if (isPalindrome(input1)) {
    alert(input1 + " is a palindrome");
} else {
    alert(input1 + " is not a palindrome");
}



function isPalindrome(input) {
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); //removing all non-alphanumeric characters and converting to lowercase
    const reversed = cleaned.split('').reverse().join(''); //reversing the string
    return cleaned === reversed; // here we checked both the strings are equaal if it is matched then only return true
}



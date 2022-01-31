function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
   
    console.log((reverseStr === lowRegStr)?true : false);
  
}
palindrome("A man, a plan, a canal. Panama");
palindrome("baby");
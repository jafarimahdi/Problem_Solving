function palindrome(str){
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    let result =(reverseStr === lowRegStr)?"palindrome" : "not palindrome";
    console.log(reverseStr);
  }
  palindrome("A man, a plan, a canal. Panama");
  palindrome("baby");
  palindrome("eye");
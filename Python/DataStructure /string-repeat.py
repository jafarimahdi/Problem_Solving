
# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"




def repeat_str(repeat, string):
    result = ''
    for i in range(repeat):
        result += string
        
    return result 

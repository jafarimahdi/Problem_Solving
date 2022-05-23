#It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



def remove_char(s):
    
    length = len(s)
    
    if(length <= 2):
        return ('')
    else:
        myArray = list(s)
        myArray.pop(0)
        myArray.pop(-1)
        result = ''.join(myArray)
        
        return (result)

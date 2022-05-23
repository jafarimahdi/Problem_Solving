

# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24



def grow(arr):
    if(len(arr) == 0):
        return "it's empty array"
    else:
        arr.sort()
        result = arr[0]
        arr.pop(0)
    
        for i in range(len(arr)):
            result *= arr[i]
#     pass
        return result 
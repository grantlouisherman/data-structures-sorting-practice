import math
from random import randint,randrange

def sum(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        value = arr[0]
        del arr[0]
        return value + sum(arr)


def listItemCounter(arr):
    if len(arr) == 1:
        return 1
    else:
        del arr[0]
        return 1 + listItemCounter(arr)


def binarySearch(num, array):
    if len(array) == 1:
        if num == array[0]:
            return True
        else:
            return False
    else:
        midPoint = int(math.floor(len(array)/2))
        if num == midPoint:
            return True
        elif num > midPoint:
            return binarySearch(num, array[midPoint:])
        else:
            return binarySearch(num, array[:midPoint])


def quickSort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]
        les = [i for i in array[1:] if i <= pivot]
        greater = [i for i in array[1:] if i > pivot]
        return quickSort(les)+[pivot]+quickSort(greater)

randomNumbers = []

for i in range(0,10000):
    randomNumbers.append(randrange(0, 10000))

print quickSort(randomNumbers)
JS Basic exercise:

let data = [8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90, 23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77];

Create a class BaseNumber, that contains:
 - a "getNumber" function, that's empty.

Create a class called NumberBucket, which extends BaseNumber, that contains:
 - "_number" property, which is just one number
 - "number" getter and setter,
 - "getNumber" function, which returns this number

Create a class called PrimeBucket, which extends BaseNumber, that contains:
 - "_number" property, which is just one number
  - "number" getter and setter. setter will only set the number if the number is prime. Otherwise it won't do anything.
 - "getNumber" function, which returns this number

Go through the data array, and for each number, create either a NumberBucket object, or a PrimeBucket object.
Store all these objects in an "numbers" array.

Go through this "numbers" array, and call .getNumber() for all the objects there, and print out the result.

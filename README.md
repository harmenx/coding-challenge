How the solution works
First of all it checks for invalid inputs - null, empty or undefined arrays, edge cases such as having the a count greater than the array length. Also will check the input are a valid array and number. 

It will then initialise an empty result variable and calculate the size of each sub-array. 

The solution then loops through the array, jumping by the size of each sub array until it reaches the end. Upon each iteration it will take a slice based on the current index as the lower bound and the current index plus the array size as the upperbound. 

If running for the first time, run `npm run install` from the command line to install all dependencies 
How to run
1 - run `npm run start` to start a quick example

How to test 
1 - run `npm run start` to run all test cases
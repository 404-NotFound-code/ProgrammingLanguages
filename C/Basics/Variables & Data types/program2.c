#include <stdio.h>

int main()
{
    // Variables rules
    // 1. variables must be contain letters, number & _ 
    // 2. variables name must be start with a letter or _ (Invalid: int 7d;)
    // 3. variables names are case sensitive (a & A both are different)
    // 4. variables names must be meaningful for readability and cannot contain reserved words 
    int num1; // declare a variable named num1
    int num2; // declare a variable named num2
    int sum; // declare a variable named sum to store sum of num1 & num2

    // int num1, num2, sum; // declare three variable in one line is valid
    // int num1 = 50, num2 = 60, sum; // declare num1 & num2 with initialization and declare sum

    num1 = 50; // initialize 50 into num1
    num2 = 60; // initialize 60 into num2
    sum = num1 + num2; // sum stores the value of num1 & num2

    printf("Sum is %d", sum); // prints the sum using %d placeholders for int
    return 0;
}

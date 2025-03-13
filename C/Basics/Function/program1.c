#include <stdio.h>

// int add(int num1, int num2) 
double add(double num1, double num2)
{
    double sum = num1 + num2;
    return sum;
}
 
int main()
{
    // defining a function 
    // return_type function_name(parameters){
    //  function body
    //  return value
    // }
    
    // function_name(arguments) // invoke or call a function

    double a = 2.5, b = 2.5, c;
    c = a + b;
    printf("%lf\n", c); // 5.000000

    c = add(2.5, 2.5);
    printf("%lf\n", c); // 4.000000

    return 0;
}   
#include <stdio.h>

int main()
{
    int n;
    double x;

    x = 10.5;
    n = (int) x; // n is explicitly type case from float to int 
    printf("The value of n is %i\n", n); // n = 10 where \n is a escape sequence for a new line
    printf("The value of x is %lf\n", x); // prints x = 10.500000 using %lf placeholders for double
}
#include <stdio.h>

double add(double num1, double num2); // include function prototype

int main()
{
    double c = add(2.5, 2.5);
    printf("%lf\n", c); // 5.000000

    return 0;
}   

// int add(int num1, int num2) 
double add(double num1, double num2)
{
    double sum = num1 + num2;
    return sum;
}


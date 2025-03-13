#include <stdio.h>

int main()
{
    double a, b, sum;
    a = 9.5;
    b = 8.743;

    sum = a + b;

    printf("Sum is %lf\n", sum); // Sum is 18.243000
    printf("Sum is %0.2lf\n", sum); // Sum is 18.24
    printf("Sum is %0.0lf\n", sum); // Sum is 18
    printf("Sum is %0.50lf\n", sum); // Sum is 18.24300000000000200000000000000000000000000000000000
}
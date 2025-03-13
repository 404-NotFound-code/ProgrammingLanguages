#include <stdio.h>

int main()
{
    int x, y; // declare variable named x, y

    x = 1; // initialize x is 1
    y = x; // initialize y is the value of x means 1
    x = 2; // updates x is 1 which overlaps the previous one

    printf("x is %i and y is %i", x, y); // x is 2 and y is 1
    return 0;
}
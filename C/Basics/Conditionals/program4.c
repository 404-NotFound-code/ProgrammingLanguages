#include <stdio.h>

int main()
{
    int number = 5;
    int remainder = number % 2; // calculate the remainder

    if (remainder == 0)
    {
        printf("%d is even\n", number);
    }
    else
    {
        printf("%d is odd\n", number);
    }
    
    
}
#include <stdio.h>

int main()
{
    int number = 10;

    // if (number >= 0)
    // {
    //     printf("%d is positive\n", number);
    // } 
    // else
    // {
    //     printf("%d is negative\n", number);
    // }
    
    if (number < 0)
    {
        printf("%d is negative\n", number);
    } 
    else
    {
        printf("%d is positive\n", number);
    }
    
    return 0;
}
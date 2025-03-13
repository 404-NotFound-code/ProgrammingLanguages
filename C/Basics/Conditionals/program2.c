#include <stdio.h>

int main()
{
    int number = -0;

    if (number < 0)
    {
        printf("%d is negative\n", number);
    }
    else if (number > 0)
    {
        printf("%d is positive\n", number);
    }
    // else if (number == 0) // == checks equality whereas = for declare & assign a variable
    // {
    //     printf("The number is zero");
    // }
    else
    {
        printf("The number is zero");
    }
    
    return 0;
}
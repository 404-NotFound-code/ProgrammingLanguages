#include <stdio.h>
 
int main()
{
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);
    
    // for (int i = 1; i < 11; i++)
    // {
    //     printf("%d X %d = %d\n", number, i, number*i);
    // }

    int i = 1;
    // for (; i < 11; i++)
    // {
    //     printf("%d X %d = %d\n", number, i, number*i);
    // }

    for (; ; )
    {
        if(i > 10){
            break; // break out of the loop when i is greater than 10
        }

        printf("%d X %d = %d\n", number, i, number*i);
        i = i + 1;
    }
    
    
    return 0;
}
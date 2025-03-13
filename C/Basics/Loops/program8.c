#include <stdio.h>
 
int main()
{
    int number, x = 0;
    printf("Enter a number: ");
    scanf("%d", &number);

    for (int i = 1; i <= 10; i++)
    {
        x = x + number;
        printf("%d X %d = %d\n", number, i, x);
        
        // printf("%d X %d = %d\n", number, i, number+x);
        // x += number;
    }
    return 0;
}
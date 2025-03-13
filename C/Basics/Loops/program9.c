#include <stdio.h>
 
int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    // for (int i = 1; i <= num; i++)
    // {
    //     for (int j = 1; j <= 10; j++)
    //     {
    //         printf("%d X %d = %d\n", i, j, i*j);
    //     }
    //     printf("\n");
    // }

    for(int i = 1; i <= num; i++){
        int x = 0;
        for(int j = 1; j <= 10; j++){
            x += i;
            printf("%d X %d = %d\n", i, j, x);
        }
        printf("\n");
    }
    
    return 0;
}
#include <stdio.h>
 
int main()
{
    int arr[10] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    // index       0   1   2   3   4   5   6   7   8   9


    for (int i = 0; i < 10; i++)
    {
        printf("%dth element is: %d\n", i+1, arr[i]);
    }

    printf("\n");

    for (int i = 9; i >= 0; i--)
    {
        printf("%dth element is: %d\n", i+1, arr[i]);
    }

    return 0;
}
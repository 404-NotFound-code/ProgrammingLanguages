#include <stdio.h>
 
int main()
{
    // Reverse an array
    int arr[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
    int arr2[10];
    
    for (int i = 0, j = 9; i < 10; i++, j--)
    {
        arr2[j] = arr[i];
    }

    for(int i = 0; i < 10; i++)
    {
        arr[i] = arr2[i];
    }

    for(int i = 0; i < 10; i++)
    {
        printf("%d\n", arr[i]);
    }

    printf("\n");

    // Alternative way
    int temporary;

    // temporary = arr[9];
    // arr[9] = arr[0];
    // arr[0] = temporary;

    // temporary = arr[8];
    // arr[8] = arr[1];
    // arr[1] = temporary;

    for(int i = 0, j = 9; i < 10; i++, j--)
    {
        temporary= arr[j];
        arr[j] = arr[i];
        arr[i] = temporary;
    }

    for(int i = 0; i < 10; i++)
    {
        printf("%d\n", arr[i]);
    }
    
    return 0;
}
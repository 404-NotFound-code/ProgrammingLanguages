#include <stdio.h>
 
int main()
{
    int arr[10] = {5, 10, 15, 20, 25};
    // index       0  1   2   3   4

    printf("%d %d\n", arr[0], arr[9]); // 5 ...

    // Assigning values to an array
    arr[0] = 100;
    arr[2] = 200;
    arr[3] = 300;

    printf("%d %d %d %d\n", arr[0], arr[1], arr[2], arr[3]); // 100 10 200 300

    int arr2[5] = {6, 7, 4, 6, 9};
    // index       0  1  2  3  4

    printf("%d\n", arr2[-1]); // outputs random number
    printf("%d\n", arr2[5]); // outputs random number 
    printf("%d\n", arr2[100]); // outputs random number
    
    return 0;
}
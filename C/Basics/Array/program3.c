#include <stdio.h>
 
int main()
{
    int arr[10] = {5, 10, 15, 20, 25, 30, 35, 40, 45, 50};
    // index       0  1   2   3   4   5   6   7   8   9

    printf("%d\n", arr[0]); // 5
    printf("%d\n", arr[1]); // 10
    printf("%d\n", arr[8]); // 45
    // printf("%d\n", arr[10]); // outputs random number(index is out of range)
    return 0;
}
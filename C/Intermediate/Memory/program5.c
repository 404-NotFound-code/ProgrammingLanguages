#include <stdio.h>
 
int main()
{
    int array[5] = {50, 60, 70, 80, 90};

    printf("Value of Array: %d %d %d %d %d\n", array[0], array[1], array[2], array[3], array[4]);

    printf("Address of array is %p\n", array);
    printf("Address of array[0] is %p\n", &array[0]);
    printf("Address of array[1] is %p\n", &array[1]);
    printf("Address of array[2] is %p\n", &array[2]);
    printf("Address of array[3] is %p\n", &array[3]);
    printf("Address of array[4] is %p\n", &array[4]);
    return 0;
}
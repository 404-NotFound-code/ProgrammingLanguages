#include <stdio.h>

int main()
{
    int a; // int = 4 byte = 32 bit (1 byte = 8 bit) => 2^32 = 4294967296 
    a = 1000;
    printf("Value of a is %d\n", a);
    a = -21000;
    printf("Value of a is %d\n", a);
    a = 10000000;
    printf("Value of a is %d\n", a);
    a = -10000000;
    printf("Value of a is %d\n", a);
    a = 100020004000503;
    printf("Value of a is %d\n", a); // The value of a is out of range
    a = -4325987632;
    printf("Value of a is %d\n", a); // The value of a is out of range

}
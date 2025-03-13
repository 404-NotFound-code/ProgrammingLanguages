#include <stdio.h>
 
int main()
{
    int num;
    long long num2;
    long num3;
    char ch;
    double decNum;
    float decNum2;

    printf("%lu\n", sizeof(int)); // 4

    printf("Size of int: %d\n", sizeof(num)); // 4
    printf("Size of char: %d\n", sizeof(num)); // 4
    printf("Size of double: %d\n", sizeof(decNum)); // 8
    printf("Size of float: %d\n", sizeof(decNum2)); // 4

    printf("Size of long int: %d\n", sizeof(num2)); // 8
    printf("Size of long long int: %d\n", sizeof(num2)); // 8
    return 0;
}
#include <stdio.h>

int main()
{
    int num1 = 50.45, num2 = 60, sum; // here, a implicitly typecasting for float to int because the variable type is int
    sum = num1 + num2; // sum = 50 + 60

    printf("%d + %d = %d", num1, num2, sum); // 50.45 + 60 = 110
    return 0;
}
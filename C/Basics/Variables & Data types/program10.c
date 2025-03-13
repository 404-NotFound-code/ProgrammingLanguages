#include <stdio.h>

int main()
{
    int num1, num2;
    char remainder = '%';
    printf("Please enter number1 and number2: ");
    scanf("%d %d", &num1, &num2);

    printf("%d + %d = %d\n", num1, num2, num1+num2);
    printf("%d - %d = %d\n", num1, num2, num1-num2);
    printf("%d * %d = %d\n", num1, num2, num1*num2);
    printf("%d / %d = %d\n", num1, num2, num1/num2);
    // printf("%d / %d = %lf\n", num1, num2, num1/num2); // outputs something wired
    printf("%d %c %d = %d\n", num1, remainder, num2, num1%num2);
    
    return 0;
}
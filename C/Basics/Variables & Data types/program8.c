#include <stdio.h>

int main()
{
    int a, b, sum;
    printf("Enter a: ");
    scanf("%d", &a);
    printf("Enter b: ");
    scanf("%d", &b);

    // scanf("%d %d", &a, &b); // In short

    sum = a + b;

    printf("Sum is %d\n", sum);
}
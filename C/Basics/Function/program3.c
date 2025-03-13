#include <stdio.h>

int testFunction(int x)
{
    int y = x;
    x = 2*y;
    return (x*y);
}
 
int main()
{
    int x = 10, y = 20, z = 30;
    z = testFunction(x);
    printf("x: %d\ty: %d\tz: %d", x, y, z);

    return 0;
}
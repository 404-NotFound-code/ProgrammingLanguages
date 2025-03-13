#include <stdio.h>
 
int main()
{
    int n = 0;

    while (n < 10)
    {
        n += 1;
        if (n % 2 == 0)
        {
            continue; // skips the iteration when n is divided by 2 and it's remaider is 0
        }
        printf("%d\n", n);
    }
    
    return 0;
}
#include <stdio.h>
 
int main()
{
    int n = 1;

    while (n <= 100)
    {
        printf("%d\n", n);
        n++; 

        if (n > 40)
        {
            break; // if n is greater than 10, then break the loop
        }
        
    }
    
    return 0;
}
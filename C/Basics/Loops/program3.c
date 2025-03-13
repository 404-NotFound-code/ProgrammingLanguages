#include <stdio.h>
 
int main()
{
    int n = 1;

    while (n <=10) // infinite loop
    {
        printf("%d\n", n); // here, prints the value of n is always 1(because n is not updated in this block)
    }
    n++; 
    
    return 0;
}
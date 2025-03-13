#include <stdio.h>
 
int main()
{
    char smallLetter, capitalLetter;
    printf("Please enter a small letter: ");
    smallLetter = getchar();

    capitalLetter = smallLetter - 32;
    printf("The capital letter is: %c\n", capitalLetter);
    return 0;
}
#include <stdio.h>

int main()
{
    char letter;
    printf("Enter a letter: ");
    scanf("%c", &letter);

    if (letter >= 'a' && letter <= 'z')
    {
        printf("%c is lowercase\n", letter);
    }
    // else
    // {
    //     printf("%c is uppercase\n", letter);
    // }
    
    else if (letter >= 'A' && letter <= 'Z')
    {
        printf("%c is uppercase\n", letter);
    }
    
}
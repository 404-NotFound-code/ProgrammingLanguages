#include <stdio.h>

int main()
{
    char character; // char is a data type which stores a single character including letters, symbol etc (char must be enclosed with single quotation)
    printf("Enter the first letter of your name: ");
    scanf("%c", &character); // %c is a format specifier for char data

    // character = getchar(); // another way to input char data from user

    printf("The first letter of your name is %c\n", character); 
}
#include <stdio.h>
 
int main()
{
    int ftMarks, stMarks, fMarks;
    double totalMarks;

    printf("Enter your marks 3 times: ");
    scanf("%d %d %d", &ftMarks, &stMarks, &fMarks);

    totalMarks = ftMarks/4.0 + stMarks/4.0 + fMarks/2.0;
    // totalMarks = ftMarks/4 + stMarks/4 + fMarks/2;

    printf("%0.7lf", totalMarks);
    return 0;
}
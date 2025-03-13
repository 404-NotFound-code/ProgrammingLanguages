#include <stdio.h>
 
int main()
{
    int ftMarks[40] = {83, 86, 97, 95, 93, 95, 86, 52, 49, 41, 42, 47, 90, 59, 63, 86, 40, 46, 92, 56, 51, 48, 67, 49, 42, 90, 42, 83, 47, 95, 69, 82, 82, 58, 69, 67, 53, 56, 71, 62};

    int stMarks[40] = {86, 97, 95, 93, 95, 86, 52, 49, 41, 42, 47, 90, 59, 63, 86, 40, 46, 92, 56, 51, 48, 67, 49, 42, 90, 42, 83, 47, 95, 69, 82, 82, 58, 69, 67, 53, 56, 71, 62, 49};

    int fMarks[40] = {87, 64, 91, 43, 89, 66, 58, 73, 99, 81, 100, 64, 55, 69, 85, 81, 80, 67, 88, 71, 62, 78, 58, 66, 98, 75, 86, 90, 80, 85, 100, 64, 55, 69, 85, 81, 80, 67, 88, 71};    

    double totalMarks[40];

    for(int i = 0; i <=40; i++)
    {
        totalMarks[i] = ftMarks[i]/4.0 + stMarks[i]/4.0 + fMarks[i]/2.0;
    }

    for(int i = 1; i <= 40; i++){
        printf("Roll no: %d\tTotal Marks: %0.0lf\n", i, totalMarks[i-1]);
    }
    return 0;
}
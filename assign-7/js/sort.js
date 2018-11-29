let firstArray = [-3,8,-5,4,-8,0,7,6,-2,-7,5,10,-4,3,9,-10,-6,-1,2,1];
let secondArray = [];
let min = firstArray[0];
let pos;
let max = firstArray[0];
for (i = 0; i < firstArray.length; i++)
{
    if (max < firstArray[i]) max = firstArray[i];
}

for (let i=0;i<firstArray.length;i++)
{
    for (let j=0;j<firstArray.length;j++)
    {
        if (firstArray[j]!="x")
        {
            if (min > firstArray[j])
            {
                min = firstArray[j];
                pos=j;
            }
        }
    }
    secondArray[i] = min;
    firstArray[pos] = "x";
    min = max;
}
console.log(secondArray);

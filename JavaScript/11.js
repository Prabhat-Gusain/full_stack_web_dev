let arr=[250,645,300,900,50];

for(let i=0;i<arr.length;i++)
{
    let offer=arr[i]/10;
    arr[i]=arr[i]-offer;
}
for(let i=0;i<=arr.length;i++)
{
    console.log(arr[i]);
}


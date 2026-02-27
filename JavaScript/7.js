console.log("Js Array");

let arr=[1,2,3,4,5,8];
console.log(arr);
console.log(arr.length);
console.log(arr[2]);
arr[0]=50;
console.log(arr);
console.log(arr.sort());

let a1=[4,5,6];
let a2=[1,2,3];
let a3=[8,9,1];
console.log(a1.concat(a2,a3).sort());

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
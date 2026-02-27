console.log("JS loops");

let a=1;
for(let i=0;i<5;i++)
{
    console.log(i);
}

let obj={
    name:"Henry",
    role:"C++",
    company:"micro"
}

for(const key in obj)
{
    const ele=obj[key];
    console.log(key,ele);
}


let i=0;
while(i<6)
{
    console.log(i);
    i++;
}
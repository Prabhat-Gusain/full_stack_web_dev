console.log("return the number of vowels in the string!!");

function countVowels(s){
    let count=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u")
        {
            count++;
        }
    }
    return count;
}


const arrowCountVowel=(s)=>{
    let count=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u")
        {
            count++;
        }
    }
    return count;
}

// let count=countVowels("ayush");
let count=arrowCountVowel("Prabhat Gusain");
console.log("vowel count in string=",count);



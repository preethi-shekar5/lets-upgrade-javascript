console.log(" program 1");

// 1.program to search for a particular character in a string
let name = " preethi";
let index = name.indexOf("a");
if(index==-1)
{
       console.log("the char isnt in the string");
}
else{
console.log(" char index at   "+index);
}

console.log(" program 2");

// 2. program to convert minutes to seconds
let minute = 2;
console.log("seconds = " + minute*60);

console.log(" program 3");

//3.program to search of an element in an array
let data=["javascript","java","python","c++"];
let index2 = data.includes("javascript",2);
console.log(index2);
let index3= data.includes("python");
console.log(index3);

console.log(" program 4");

//4.program to display only elements containing a in them from an array
let words=["apple","banana"," clock"];
console.log(" elements with a");
for(let i=0;i<words.length;i++)
{
       let word=words[i];
       let n = word.indexOf("a");
if(n!=-1)
{
console.log(word);
}

}

console.log(" program 5");

// 5. print an array in reverse order
let array =[" upgrade"," lets"," hey"];
let reverse = array.reverse();
console.log(reverse);
















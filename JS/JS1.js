console.log("Hii bro");
let a = BigInt("11");
console.log(a);
const student ={
    fullName : "Boss",
    age : 89,
    marks :88,
    ispass:true

};
let g =20;
let e = 4;
console.log(g**e);
alert("hello");
let b = prompt("Enter the number");
  a%5==0?console.log("Number is multiple of",b):console.log("Number is not multiple",b);
let str = "Ayushsahu";
let size = 0;
for (let i of str)
{
    console.log("character==",i);
    size++;

}
console.log(size);

let student1 ={
    stn :"Ayush" ,
    age :23,
    mark:90,
    id:123,
};

for(let i in student1){

    console.log("details",i,"value=",student1[i]);
}
//Template Litrals
let st = "Ayushsahu"
let str1 = "boss"
console.log(`Name ${student.st} \n age ${student.age} `);
console.log(str.toUpperCase());
console.log(str.slice(2,4));
console.log(str+str1);
console.log(str.replace("A","s"))
console.log(str.charAt(3));
console.log("@"+str+"123");
let heros = ["superman","batman","catman","spiderman",1]
console.log(heros);
for(let i of heros;
let marks = [122,12,2,32,23,232,21];
lesum=0 ;
marks.push(77);
console.log(marks);
marks.pop();
console.log(marks);
console.log(marks.toString);
console.log(marks);

console.log(marks.slice(1,5));
function myfunction(msg,n){
    console.log(msg,n);
}
myfunction("this message of function",122);
const  arrow=(a,b)=>{
    console.log(a*b);
    
    }
console.log(arrow(3,3));
const msg = ()=>{
    return "Message arrow function"
}    
// console.log(msg());

let sum=0;
function vowel(str){
    for(const v of str)
    {
        if(v=='a' || v=='e'||v=='i'||v=='o'||v=='u')
        {
            ++sum;
        }
        
    } 

let sum =0;
const array = (str)=>{
    for(const v of str)
    {
        if(v=='a' || v=='e'||v=='i'||v=='o'||v=='u')
        {
            ++sum;
        }
        
    } 
    return sum;
}

array("aaaus");
console.log(sum);

let nums = [190,2,3,4,5,6];
nums.forEach((num)=>{console.log(num*2);});


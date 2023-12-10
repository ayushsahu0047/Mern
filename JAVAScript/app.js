//Arrow Function--------------------------------------------//
// const subtract = (a,b) => a-b;
// let result = subtract(100,20);
// console.log(result);
// //Object---------------------------------------- spread operatoer//
// const person = {
// name :'Ayush',
// age :23,
// gmail:'ayushsahupip@gmail'
// }
// const person1 = {...person, name : 'aaaaaaaaaa',age:44}
// console.log(person)
// console.log(person1)
// const array1 = [1,1,2,3,43]
// const array = [...array1,3,45,5]
// console.log(array)
 const data =[
    {
        id:1,tittle:'iphone',price:'33223'
    }
    ,
    {
        id:2,tittle:'Vivo',price:'33333'
    }
    ,
    {
        id:3,tittle:'oneplux',price:'33333'
    }
    ,
    {
        id:4,tittle:'iqw',price:'30033'
    }
 ];
//  data.map((p) => console.log(p.tittle) )
//  //Filters
const result = data.filter((kuchbhi) => kuchbhi.price>=31000 )

console.log(result)
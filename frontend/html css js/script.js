// 1.using switch print the rainbow colors aas per the input

// 2.sam is having 75 kitkats in that half he gives to his friend angel since angel loves sam a lot she gives back half find out how many kitkats both have
// use min variables

// 3.ram is passionate about GainNode. he is going to temple offers lemon to godess

// let c=prompt("Enter a color :")
// // alert(c)
// switch(c){
//     case 'v'||'V':
//         alert("violet");
//         break;
//     case 'b':
//         alert("blue");
//         break;
//     case 'i':
//         alert("indigo");
//         break;
//     case 'y':
//         alert("yello");
//         break;
//     case 'o':
//         alert("orange");
//         break;
//     case 'r':
//         alert("red");
//         break;
//     default:
//         alert("unknown color");
// }


// let v=prompt("enter the value");
// let v=5;


// for(i=0;i<v;i++){
//     for(j=i;j<v;j++){
//         if(i==j){
//             document.write("*");
//             // document.write(<br/>);
//         }
//     }
// }

// create an array with user i/p size and element from user. print weather sum of array elements is divisible by both 3 and 11
// exteract and print odd and even from array
// create a static array consisting of int float and strings access and print elements
// create array which should have combination of 2 objects and 1 function

// let n=prompt("enter  the size");
// let sum=0;
// let arr=[]
// for(i=0;i<n;i++){
//     let num=prompt();
//     arr.push(num)
//     num= +num
//     sum+= num;
// }
// if(sum%3===0 || sum%11===0){
//     document.write('the number is divisible by 3 or 11');
// }
// else{
//     document.write('not divisible by 3 or 11')
// }
// document.write("<br/>",sum);
// document.write("<br/>");
// // arr=arr.map(number);
// for(i=0;i<n;i++){
//     if(Number(arr[i])%2===0){
//         document.write("even: ",arr[i]);
//         document.write("<br/>");
//     }else{
//         document.write("odd : ",arr[i]);
//         document.write("<br/>");

//     }
// }

// let a=[2,4.5,45,65];
// for(i=0;i<4;i++){
//     document.write(a[i]);
//     document.write("<br/>");
// }

// let d=[
//     {"name":"ram"},
//     {"wife":"Jaiswal"},
//     function res(){
//         document.write("child - ram kumar jaiswal");
//     }
// ];
// for(i=0;i<3;i++){
//     document.write(d[i]);
// }

// s={sugi:"GKT",sugi:"SP+",sugi:"kovai",ram:"saptang"}
// // document.write(s.sugi);
// let h=JSON.stringify(s)
// document.write(h)
// js objects 
//     -> template based object programming language
//     -> created usign object literal
//     -> creating instance of objects
//     -> using object constructor
    

// let obj = new Object();
// obj = {
//   name: "Prakash",
//   class: 2,
//   20:10000,
//   name1: 1,
//   class1: {
//     name: "akash",
//     class: "Ece",

//     name1: "Krish",
//     class1: "Ece",
//   },
//   method() {
//     console.log(`name is ${obj.name1}`);
//   },
// };
// obj.new = "neww";
// console.log(typeof obj);  
// console.log(obj.class1.name);
// console.log(obj.new);
// console.log(typeof obj['class']);

// parse -> used to convert JSON string to JSON Object
// JSON.stringify -> used to convert JSON object to JSON string 
const url=`https://api.openweathermap.org/data/2.5/weather?q=coimbatore&appid=102b10ca3b80a10e8595df2562c409ca&units=metric`

let d=fetch(url)
.then(res =>{
    console.log(res);
    return res.json();
})
.then(data=>{
    console.log(data);
    console.log(data.name);
})
// import data from './example.json' assert { type: 'json' };
// console.log(data);
// console.log(typeof(data));

// p=81;
// let pe=new Promise((resolve,reject)=>{
//     if(p%2 ===0){
//         resolve("Even")
//     }else{
//         reject("Odd")    
//     }
// } )
// .then(resolve=>{
//     console.log(resolve);
// })
// .catch(reject=>{
//     console.log(reject);
// })

// let one=new Promise((resolve,reject)=>{
//     const reached=true;
//     if(reached){setTimeout(resolve,1000,"One reached")}
//     else{reject("one not reached")}
// })
// let two=new Promise((resolve,reject)=>{
//     const reached=true;
//     if(reached){setTimeout(resolve,5000,"two reached")}
//     else{reject("two not reached")}
// })
// let three=new Promise((resolve,reject)=>{
//     const reached=true;
//     if(reached){setTimeout(resolve,4000,"three reached")}
// else{reject("three not reached")}
// })

// Promise.all([one,two,three])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((r)=>{
//     console.log(r);
// })

// Promise.allSettled([one,two,three])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((r)=>{
//     console.log(r);
// })

// Promise.any([one,two,three]) 
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((r)=>{
//     console.log(r);
// })

// Promise.race([one,two,three])
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((r)=>{
//     console.log(r);
// })

// async function onefun(){

//     res=await(three);
//     console.log(res);
//     console.log("hi");
// }

// onefun();

// console.log(document);

// let l=document.getElementById("kskskc");
// alert(l.innerHTML);
// alert(l.innerText)

// let n=document.getElementById('num').value;
// console.log(n);
// if (n>0 && n<11){
//     document.getElementById('res').innerHTML="<h1>Valid</h1>"
// }else{
//     document.getElementById('res').innerText="Invalid"
// }

// let v=5;

        // for(i=0;i<v;i++){
        //     for(j=0;j<v;j++){
        //         if(i==j || j<i){
        //             document.write("*");
        //         }else{
        //             document.write(" ");
        //         }
        //     }
        //     document.write("<br/>");
        // }
        

let sno=1;
function check (){
    let name=document.getElementById('name');
    let rollno=document.getElementById('rollno');
    let t=document.getElementById('tb');
    let d=document.createElement('tr');
    d.innerHTML=`<td>${sno++}</td><td>${name.value}</td><td>${rollno.value}</td>`;
    t.append(d);
    name.value = '';
    rollno.value='';
}

let s=document.getElementById('ani').style
s.width='200px';
s.height='300px';
s.position='relative'
s.backgroundColor="red"
let mov=document.getElementById('mov')
function moverAni(){
    mov.classList.add("movs")

}



// const vaxTrail = (obj) => {
//   const A = []
//   const B = []
//   const C = []
//   const D = []
// //   switch (obj) {
// //     case obj.age >= 20 :
// //       totalPerson.a.push(obj);
// //       break;

// //     default:
// //       console.log("Sorry you are not saticfited this vacsin");
// //   }

// if(obj && obj.age >=20 && obj.age <= 30){
//     A.push(obj)
// }
// if(obj && obj.age >=31 && obj.age <= 40){
//     B.push(obj)
// }
// if(obj && obj.age >=41 && obj.age <= 50){
//     C.push(obj)
// }

// return totalPerson  = {A:A, B:B,C:C, D:D}

// };

// const person = new vaxTrail();


// person({ name: "Sunil", age: 20, temperature: 94 });
// person({ name: "Sunil", age: 32, temperature: 94 });
// person({ name: "Sunil", age: 35, temperature: 94 })
// console.log(person);

class Stack  {
    constructor(){
        this.data = {
            a: [],
            b: [],
            c: [],
            d: []
        };
    }

    // Add Data to stack
    push(elm){
       if(elm && elm.age >=20 && elm.age <=30 && elm.tempareture <=100){
           this.data.a.push(elm)
       }
       if(elm && elm.age >=31 && elm.age <=40 && elm.tempareture <=100){
           this.data.b.push(elm)
       }
       if(elm && elm.age >=41 && elm.age <=50 && elm.tempareture <=100){
           this.data.c.push(elm)
       }
       if(elm && elm.tempareture >=100){
           this.data.d.push(elm)
       }
    }

   
}
const data = new Stack();

const vaxTril = (elm)=>{
   data.push(elm)
}
    
    




vaxTril({name: 'Ariful Islam', age: 32, tempareture: 89});
vaxTril({name: 'Ariful Islam', age: 23, tempareture: 90});
vaxTril({name: 'Ariful Islam', age: 42, tempareture: 94});
vaxTril({name: 'Ariful Islam', age: 35, tempareture: 99});
vaxTril({name: 'Ariful Islam', age: 19, tempareture: 90});
console.log(data.data);




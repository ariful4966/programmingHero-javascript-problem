

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




// function MyUser(name){
//   // this ={} 
//   this.name = name;
  
//   // return this
// }

// MyUser.prototype.getName = function getName(){
//   console.log(this.name); 
// }
 

// const user1 = new MyUser('Alex')
// const user2 = new MyUser('Vlad')


// user1.getName();
// user2.getName();
// const  app = () =>{

//   function getName(name){
//     console.log(this.name); 
// }




// const obj ={
//   name:  "alex1",
//   getName: getName
// };


// const obj2 ={
//   name:  "vlad",
//   getName: getName
// };


// obj.getName()
// obj2.getName()
// }


// app()

// let f = () =>{
//  let corr = 0
//  return () => {
//   console.log(corr);
//   corr++

//  }
// }
// const f1 = f();
// const f2 = f();
//  f = null


// f1();
// f1();
// f1();

// f2();
// f2();
// f2();






function logger() {
  let count = 0;

  return {
     function() {
     console.log("число " + count);
     count++
    },
  };
};

let  logger1 = logger()
let  logger2 = logger()

logger1.function()
logger1.function()
logger1.function()
logger1.function()
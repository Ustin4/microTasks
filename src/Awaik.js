//this

// 1.Global scope
// 2.function(),arrow function()=>{}
// 3.call,apply,bind
// 4.Function constructor
// 'use strict';

//==========1============

// console.log(this)
// console.log(this === window)

//==========2============
// const foo = () => {
//     console.log(this)
// }

// function bar(){
//     const foo = () => {
//         console.log(this)
//     }
//     foo()
// }
//
// bar()

const car ={
    brand:'bmw',
    showBrand(){
       const foo = () => {
           console.log(this.brand)
       }
       foo()
    }
}

car.showBrand()


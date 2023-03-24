let arr1 = [{id:1,num:1},{id:2,num:2}]
let arr2 = [{id:1,num:2},{id:3,num:2}]

let res = arr1.filter((value)=>{
    return arr2.some(item=>item.id === value.id)
})
    
let arr3 = [1,2]
arr2.unshift({id:5,num:2})
console.log(arr2)
// console.log(res)
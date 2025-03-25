var aa
aa = 10
var bb = 20
aa = 100
bb = 200
 
let cc
cc = 30
let dd = 40
cc = 300
dd = 400
 
// const ee  ERROR
const ee = 50
// ee = 500 ERROR
 
// Scope ขอบเขตการทำงาน คืือ { ..... } (Global/Local)
var a1 = 10
let a2 = 20
const a3 = 30
{
    var b1 = 100
    let b2 = 200
    const b3 = 300
    {
        var c1 = 1000
        let c2 = 2000
        const c3 = 3000
        console.log(a2)
        console.log(b2)
        console.log(c2)
    }
    console.log(a2)
    console.log(b2)
    // console.log(c2) ERROR
}
console.log(a2)
// console.log(b2) ERROR
// console.log(c2) ERROR
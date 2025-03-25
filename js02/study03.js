let a = 'Hello'
let b = "Hi"
let c = `Hey`
 
//number
let d = 10 //interger
let e = 455.4555 //float
 
//boolean
let f = true
let g = false
 
//array ***
let h = [10, 20, 30]
let i = ['Hi', 'Hello', 'Bye']
let j = [10, 'Hello', true, 111, 555, ['aa', 'bb', 'cc'],{midScore:20, finalScore:85}] //แปลก
console.log(h[1])
console.log(i[2])
console.log(j[6].finalScore)
 
//object ***
let k = {
    //key : value
    fullname: 'สมรัก',
    age: 20,
    salary: 15000.75,
    isMarried: true,
    food : ['kfc', 'pizza', 'sushi'],
    address : {
        province : 'กรุงเทพ',
        district: 'หนองแขม',
        zipcode: 10160,
        homeno: ['10/25', '111/2']
    }
}
console.log(k.fullname)
console.log(k.address.zipcode)
console.log(k.food[2])
console.log(k.address.homeno[1])   //111/2
 
//undifined
let x
console.log(x)
 
//null
let y = null
console.log(y)
 
//คำสั่งตรวจสอบ Type
console.log(typeof a)
console.log(typeof k)
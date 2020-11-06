// Task 1 //
let array1 = [5, 10, 25, 100, 6, 18];

let result1 = array1.map (devide => devide / 2)

console.log(result1)
// Task 2 //
let names = [5, 25, 89, 120, 36]

names.push ('Javascript', 'Python')
console.log(names)

names.unshift ('Html', 'Css')
console.log(names)

names.shift()
names.pop()
console.log(names)
// Task 3 //
let array3 = ['Hello', 'Javascript', 'Html', 43, 'Css', 'Scss', 76, 'Boostrap', 88, 59];

let result3 = array3.filter (string => typeof string === 'string')

console.log(result3)
// Task 4 //
let array4 = ['Hello', 'Javascript', 'Html', 43, 'Css', 'Scss', 76, 'Boostrap', 88, 59];

let result4 = array4.filter (number => typeof number === 'number')

console.log(result4)
// Task 5 //
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let result5 = cities.filter(z => z.population < 3000000)

console.log(result5)
// Task 6 //
let array6 = ['ფორთოხალი', 'ბანანი', 'მსხალი']

array6.push ('ვაშლი', 'ანანასი')
console.log(array6)

array6.unshift ('საზამთრო')
console.log(array6)

array6.shift()
array6.pop()
console.log(array6)

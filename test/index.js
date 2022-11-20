const khoa = {
    username: 'khoa',
    age: '14',
    address: 'camau'
    }
  
  console.log(khoa)


  var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
console.log(smartPhones.map(smartPhone => smartPhone.price));

let students =[
    {
        name:"ho va ten:khoa",
        age:12,
        email:"email:khoa@gmail.com"
    },
    {
        name:"ho va ten:tai",
        age:13,
        email:"email:tai@gmail.com"
    },
    {
        name:"ho va ten:loc",
        age:14,
        email:"email:loc@gmail.com"
    },
    {
        name:"ho va ten:phat",
        age:15,
        email:"email:phat@gmail.com"
    },
]
let studentsString = JSON.stringify(students)
console.log(studentsString);
localStorage.setItem("students",studentsString)
let studentsdata =JSON.parse( localStorage.getItem("students"))
let getstudentsdata = ()=>{
let data = document.getElementById("showsdata")
}
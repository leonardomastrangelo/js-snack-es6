/**
 * * SNACK 1 *
*/
// list of vip guests
vipList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//todo  make every guest an object with 3 proprerties
const vips = 
[
    {
        tableNumber : "Vip table",
        vipName : "Brad Pitt",
        place : 1
    },
    {
        tableNumber : "Vip table",
        vipName : "Johnny Depp",
        place : 2
    },
    {
        tableNumber : "Vip table",
        vipName : "Lady Gaga",
        place : 3
    },
    {
        tableNumber : "Vip table",
        vipName : "Cristiano Ronaldo",
        place : 4
    },
    {
        tableNumber : "Vip table",
        vipName : "Georgina Rodriguez",
        place : 5
    },
    {
        tableNumber : "Vip table",
        vipName : "Chiara Ferragni",
        place : 6
    },
    {
        tableNumber : "Vip table",
        vipName : "Fedez",
        place : 7
    },
    {
        tableNumber : "Vip table",
        vipName : "George Clooney",
        place : 8
    },
    {
        tableNumber : "Vip table",
        vipName : "Amal Clooney",
        place : 9
    },
    {
        tableNumber : "Vip table",
        vipName : "Maneskin",
        place : 10
    },
]
//todo  print every new array of vips' object
console.log(vips);
vips.forEach((element)=> console.log(element))

/**
 * * SNACK 2 *
*/
//todo << create an array of objects for every student >>
const students = 
[
    {
        studentID : 213,
        studentName : "Marco della Rovere",
        grades : 78
    },
    {
        studentID : 110,
        studentName : "Paola Cortellessa ",
        grades : 96
    },
    {
        studentID : 250,
        studentName : "Andrea Mantegna  ",
        grades : 48
    },
    {
        studentID : 145,
        studentName : "Gaia Borromini",
        grades : 74
    },
    {
        studentID : 196,
        studentName : "Luigi Grimaldello",
        grades : 68
    },
    {
        studentID : 102,
        studentName : "Piero della Francesca",
        grades : 50
    },
    {
        studentID : 120,
        studentName : "Francesca da Polenta",
        grades : 84
    }
]

//todo << creation of a list with students's name in uppercase format >>
const studentsName = students.map((student)=> student.studentName.toUpperCase());

//todo << creation of a list with students whose grades are > 70
const StudentsUp70 = students.filter((student)=> student.grades > 70);

//todo << creation of a list with students whose grades are > 70
const StudentsUp70ID120 = students.filter((student)=> student.grades > 70 && student.studentID > 120);
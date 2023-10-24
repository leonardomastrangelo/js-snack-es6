/**
 * * SNACK 1 *
*/
// list of vip guests
vipList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
let place = 0
let table = "Vip Table"
let nameVip = ""
// take row from html
const row = document.querySelector(".row")

// making every guest an object and print them in html
const vipz = vipList.map((vip, index) => {
    let person = {}
    person.nameVip = vip
    person.placeNum = index + 1
    person.table = table
    printTicket(person.nameVip,person.placeNum,person.table)
    return person
}
)
// print in console the new array of objects
console.log(vipz);

// fn to print in html every vip
function printTicket(name,placeNum,tableType) {
    let template =
        `
    <div class="col-12 col-lg-5 my-5 py-4 rounded-5">
        <strong>Name</strong>
        <h2>${name}</h2>
        <strong>Table</strong>
        <h2>${tableType}</h2>
        <strong>Place</strong>
        <h2>${placeNum}</h2>              
    </div>
    `
    row.innerHTML += template
}


/**
 * * SNACK 2 *
*/
//todo << create an array of objects for every student >>
const students =
    [
        {
            studentID: 213,
            studentName: "Marco della Rovere",
            grades: 78
        },
        {
            studentID: 110,
            studentName: "Paola Cortellessa ",
            grades: 96
        },
        {
            studentID: 250,
            studentName: "Andrea Mantegna  ",
            grades: 48
        },
        {
            studentID: 145,
            studentName: "Gaia Borromini",
            grades: 74
        },
        {
            studentID: 196,
            studentName: "Luigi Grimaldello",
            grades: 68
        },
        {
            studentID: 102,
            studentName: "Piero della Francesca",
            grades: 50
        },
        {
            studentID: 120,
            studentName: "Francesca da Polenta",
            grades: 84
        }
    ]

//todo << creation of a list with students's name in uppercase format >>
const studentsName = students.map((student) => student.studentName.toUpperCase());

//todo << creation of a list with students whose grades are > 70
const StudentsUp70 = students.filter((student) => student.grades > 70);

//todo << creation of a list with students whose grades are > 70
const StudentsUp70ID120 = students.filter((student) => student.grades > 70 && student.studentID > 120);
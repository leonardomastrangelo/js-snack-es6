/**
 * * SNACK 1 *
*/
// list of vip guests
vipList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
// initializing data
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
    printTicket(person.nameVip, person.placeNum, person.table)
    return person
}
)
// print in console the new array of objects
console.log(vipz);

// fn to print in html every vip
function printTicket(name, placeNum, tableType) {
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

const row2 = document.querySelector("#snack-2 .row")
const colName = document.getElementById("name")
const colUp70 = document.getElementById("up70")
const colBoth = document.getElementById("both")

studentsName.forEach((st) => {
    colName.innerHTML +=
        `
    <h2>${st}</h2>
    `
})
StudentsUp70.forEach((stup) => {
    colUp70.innerHTML +=
        `
    <h2>${stup.studentName}</h2>
    <h2>Grade : ${stup.grades}</h2>
    `
})
StudentsUp70ID120.forEach((stbo) => {
    colBoth.innerHTML +=
        `
    <h2>Grade : ${stbo.grades}</h2>
    <h2>ID : ${stbo.studentID}</h2>
    `
})

/**
 * * SNACK 3 *
*/
//todo << Create an array of objects with proprerties-> "name", "weight"
const min = 10;
const max = 80;
const cycles = 
[
    {
        nome : "pippo",
        weight : getRndInteger(min,max)
    },
    {
        nome : "paperino",
        weight : getRndInteger(min,max)
    },
    {
        nome : "pluto",
        weight : getRndInteger(min,max)
    },
    {
        nome : "topolino",
        weight : getRndInteger(min,max)
    },
    {
        nome : "topolino",
        weight : getRndInteger(min,max)
    },
    {
        nome : "minnie",
        weight : getRndInteger(min,max)
    },
    {
        nome : "tony",
        weight : getRndInteger(min,max)
    },
    {
        nome : "mario",
        weight : getRndInteger(min,max)
    },
    {
        nome : "giuseppe",
        weight : getRndInteger(min,max)
    },
]

// taking the first object of array as competitor
let bike = cycles[0];
// cycle the array in order to find the lowest value
cycles.forEach((cycle)=> {
    if (cycle.weight < bike.weight) {
        bike = cycle
    }
})
// print in console the value
console.log(bike);
// .row from html
const row3 = document.querySelector("#snack-3 .row");
// printing lowest weight value in html
printCycle()
function printCycle() {
    let template = 
    `
    <div class="col-5">
        <h2 class="display-1 mb-5">Cycle with lowest weight</h2>
        <div class="bg-light rounded-top-3 pt-3">
            <span class="display-5">Cycle : </span>
            <span class="display-3">${bike.nome}</span>
        </div> 
        <div class="bg-light rounded-bottom-3 pb-3">
            <span class="display-5">Weight : </span>
            <span class="display-3">${bike.weight}kg</span>
        </div> 
    </div>
    `
    row3.innerHTML += template
}

/**
 * * SNACK 4 *
*/
// //todo << Create an array of objects with proprerties-> "name", "points", "fouls"
const teams = 
[
    {
        name : "milan",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "juventus",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "inter",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "sassuolo",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "monza",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "torino",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "empoli",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "fiorentina",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "sampdoria",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    },
    {
        name : "roma",
        points : getRndInteger(1,70),
        fouls : getRndInteger(1,20)
    }
]

// creation of array with only 2 proprerties -> "name", "fouls"
const newTeams = teams.map((team,index)=> {
    // destructuring every team
    const {name, fouls} = teams[index]
    const newTeam = {
        name,
        fouls,
    }
    return newTeam
})

// print in console the new array
console.log(newTeams);

// .row from html
const row4 = document.querySelector("#snack-4 .row");

// printing every team in html
newTeams.forEach((team)=> {
    let template = 
    `
    <div class="col-5 p-5 mb-5 rounded-5">
        <div class="mb-4">
            <h3>Team</h3>
            <span class="display-2">${team.name}</span>
        </div>
        <div>
            <h3>Fouls</h3>
            <span class="display-2">${team.fouls}</span>
        </div>
    </div>
    `
    row4.innerHTML += template
})


// function to get rnd integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
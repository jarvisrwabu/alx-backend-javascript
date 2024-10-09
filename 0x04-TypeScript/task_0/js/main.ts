interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const jarvis: Student = {
    firstName: "Jarvis Rwabu",
    lastName: "Jongro",
    age: 33,
    location: "Mombasa",
};

const pepe: Student = {
    firstName: "Perpetual",
    lastName: "Valence",
    age: 24,
    location: "Kiribati",
};


// Array of objects - The students
const studentsList: Student[] = [jarvis, pepe];



const newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>First Name</th><th>Location</th></thead>";
for(const student of studentsList){
    const newRow = document.createElement("tr");
    const tdFname = document.createElement("td");
    const tdLocation = document.createElement("td");
    tdFname.textContent = student.firstName;
    tdLocation.textContent = student.location;    
    newRow.appendChild(tdFname);
    newRow.appendChild(tdLocation);
    newTable.appendChild(newRow);
}

const target = document.getElementById('target');
target.appendChild(newTable);
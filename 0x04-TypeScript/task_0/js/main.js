;
var jarvis = {
    firstName: "Jarvis Rwabu",
    lastName: "Jongro",
    age: 33,
    location: "Mombasa"
};
var pepe = {
    firstName: "Perpetual",
    lastName: "Valence",
    age: 24,
    location: "Kiribati"
};
// Array of objects - The students
var studentsList = [jarvis, pepe];
var newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>First Name</th><th>Location</th></thead>";
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var newRow = document.createElement("tr");
    var tdFname = document.createElement("td");
    var tdLocation = document.createElement("td");
    tdFname.textContent = student.firstName;
    tdLocation.textContent = student.location;
    newRow.appendChild(tdFname);
    newRow.appendChild(tdLocation);
    newTable.appendChild(newRow);
}
var target = document.getElementById('target');
target.appendChild(newTable);

const fs = require("fs");


// CREATE


fs.writeFileSync(
    "student.txt",
    "Name: Manu\nCourse: B.Tech CSE"
);

console.log("File created successfully.");



// READ


const data = fs.readFileSync("student.txt", "utf8");

console.log("\nFile contents:");
console.log(data);



// UPDATE


fs.appendFileSync(
    "student.txt",
    "\nCollege: ABES Engineering College"
);

console.log("\nFile updated successfully.");


// Read the updated file
const updatedData = fs.readFileSync(
    "student.txt",
    "utf8"
);

console.log("\nUpdated file contents:");
console.log(updatedData);



// DELETE


fs.unlinkSync("student.txt");

console.log("\nFile deleted successfully.");
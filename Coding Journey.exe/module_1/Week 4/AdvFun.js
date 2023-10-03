
// // set timeout runs just once
// setTimeout (() => {
//     alert("BOO!"); 
// }, 3000);

// // set interval 
// let intervalId= setInterval (()=>{
//     console.log("this is the set interval example" 
// }, 1000);

const wizards = [
    {firstName: 'Harry', familyName: 'Potter', house:'Gryffindor', marks: 7},{firstName: 'Ron', familyName: 'Weasley', house:'Gryffindor', marks: 5},
    {firstName: 'Tom', familyName: 'Riddle', house:'Slytherin', marks: 9}, {firstName: 'unknown', familyName: 'Crab', house:'Slytherin', marks: 4},
    {firstName: 'Hermione', familyName: 'Granger', house:'Gryffindor', marks: 9},{firstName: 'Cedric', familyName: 'Diggory', house:'Hufflepuff', marks: 6},
    {firstName: 'Rowena', familyName: 'Ravenclaw', house:'Ravenclaw', marks: 8},{firstName: 'Draco', familyName: 'Malfoy', house:'Slytherin', marks: 4},
    ]
    // -Use .map to log only the students first and family name in an array
    const nameOfWizard = wizards.map((wizard, index, array) => `${wizard.firstName} ${wizard.familyName}`);
    console.log(nameOfWizard);

    // -Use .map to console.log `<firstName> <familyName> belongs to house <house>`
    const houseOfWizard = wizards.map ((wizard) => {
    return (`${wizard.firstName} ${wizard.familyName} belong to the house ${wizard.house}`);
    })
    console.log (houseOfWizard);
    
    // -Use .filter to find all of the Gryffindor students
    const gryffindorStudents = wizards.filter ((element)=> element.house === 'Gryffindor');
    console.log(gryffindorStudents);

    
    // -Use .filter to find all students with marks higher than 7
    // -Use .reduce to find the average of all wizards marks
    // -Use .reduce to make an object with all Slytherin wizards. (We need to keep an eye on them) With the structure of
    // {<firstName>-<familyName>: 'Slytherin Student'};

    const theAverageMarks = function(inputArray) {
        return inputArray.reduce((total, wPersons) => {
          return total + wPersons.marks;
        }, 0) / inputArray.length;
      }
      
      console.log(theAverageMarks(wizards));

//Declare variables
var scoreCount = -1;       // Set to -1 so it doesn't count the entry that breaks the loop
var scoreTotal = -999;     // Set to -999 so the breaking number is not add up to the average
var entry;                 

// Enter scores untill 999 is entered
while(entry != 999){
   entry = parseInt(prompt('Enter test score\nOr enter 999 to end entries'));
   scoreCount++;           // Number of entries
   scoreTotal += entry;    // Holds the value of every entry
}
alert('Average score is ' + scoreTotal / scoreCount); // Display average
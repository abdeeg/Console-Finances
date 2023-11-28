/* Below is the finances array where I will pick the data from */
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

/* Here the console will log the first line of 'Financial Analysis' */

console.log("Financial Analysis");

/* Here the console will log the line break */

console.log("----------------");

/* Here the console will log the Total Months using length*/

console.log("Total Months: " + finances.length);

/* Here the console will log the total of the finances array*/

// The 'reduce' function is used to calculate the sum of the second element (Value) in each sub-array
var sum = finances.reduce(function (accumulator, currentValue) {
  // Add the current value of the second element to the accumulator
  return accumulator + currentValue[1];
}, 0); // The initial value of the accumulator is set to 0

// Output the total sum to the console
console.log("Total: $" + sum);


/* Here the console will log the Average Change in the finances array*/

// Calculate the sum of the second element (Value) in each sub-array using the 'reduce' function
var sum = finances.reduce(function (accumulator, currentValue) {
  // Add the current value of the second element to the accumulator
  return accumulator + currentValue[1];
}, 0); // The initial value of the accumulator is set to 0

// Calculate the average by dividing the sum by the number of elements in the 'finances' array
var average = Math.floor(sum / finances.length);

// Output the average change to the console in a user-friendly message
console.log("Average Change: $" + average);


/* Here the console will log the Greatest Increase in Profits/Losses */
// Initialize variables to track the biggest increase and the corresponding month
var biggestIncrease = 0;
var increaseMonth = '';

// Iterate through the 'finances' array starting from the second element
for (var i = 1; i < finances.length; i++) {
  // Calculate the increase by subtracting the previous month's value from the current month's value
  var currentIncrease = finances[i][1] - finances[i - 1][1];

  // Check if the current increase is greater than the current biggest increase
  if (currentIncrease > biggestIncrease) {
    // If true, update the biggest increase and the corresponding month
    biggestIncrease = currentIncrease;
    increaseMonth = finances[i][0];
  }
}

// Output the result to the console in a user-friendly message
console.log("Greatest Increase in Profits/Losses: " + increaseMonth + " ($" + biggestIncrease + ")");

/* Here the console will log the Greatest Decrease in Profits/Losses */
// Initialize variables to track the biggest decrease and the corresponding month
var biggestDecrease = 0;
var decreaseMonth = '';

// Iterate through the 'finances' array starting from the second element
for (var i = 1; i < finances.length; i++) {
  // Calculate the decrease by subtracting the previous month's value from the current month's value
  var currentDecrease = finances[i][1] - finances[i - 1][1];

 // Check if the current decrease is smaller than the current biggest decrease
  if (currentDecrease < biggestDecrease) {

    // If true, update the biggest decrease and the corresponding month
    biggestDecrease = currentDecrease;
    decreaseMonth = finances[i][0];
  }
}
// Output the result to the console in a user-friendly message
console.log("Greatest Decrease in Profits/Losses: " + decreaseMonth + " ($" + biggestDecrease + ")");
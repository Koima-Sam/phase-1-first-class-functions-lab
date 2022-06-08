// Code your solution in this file!
//Returns first two drivers
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

//returns last two drivers
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

//Allows us invoke either function from an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//Takes fare as an argument and returns a function that quadruples it
function createFareMultiplier(value){
    return function(fare){
        return fare * value;
    }
}
// fuction that doubles the fare
const fareDoubler = createFareMultiplier(2);

//function that triples the fare
const fareTripler = createFareMultiplier(3);

//returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
function selectDifferentDrivers(drivers, selectedDrivers){
    return selectedDrivers(drivers);

}
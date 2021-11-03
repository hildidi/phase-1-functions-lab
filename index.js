
const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(num){
    if (num > hq){
        return num - hq;
    }else (num < hq)
    return hq - num;
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num)*feet;
}

function distanceTravelledInFeet(num,num1){
    if (num>num1){
        return (num-num1)*feet;
    }else (num<num1)
        return (num1-num)*feet;
}

function calculatesFarePrice (start, destination) {
    let dist = distanceTravelledInFeet (start, destination)
    
    if (dist<=400) {
        return 0;

    } else if (dist > 400 && dist < 2000) {
        return (dist-400)*0.02;

    } 
     else if (dist > 2000 && dist < 2499) {
        return 25;

    } 
     else if (dist > 2500) { 
        return "cannot travel that far";
    } 
}
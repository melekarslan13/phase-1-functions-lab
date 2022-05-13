// Code your solution in this file!
function distanceFromHqInBlocks(num){

return Math.abs(num-42)

}
function distanceFromHqInFeet(num){

return distanceFromHqInBlocks(num)*264



}
function distanceTravelledInFeet(num1,num2){

return Math.abs(num1-num2)*264



}
function calculatesFarePrice(start, destination){

    let totalfeet=distanceTravelledInFeet(start,destination);
    
    if(totalfeet<=400)
        return 0;
    else if(totalfeet>400 && totalfeet<2000)
        return (totalfeet-400)*2/100;
    else if(totalfeet>=2000 && totalfeet<2500)
        return 25;
        else

    return 'cannot travel that far';

}
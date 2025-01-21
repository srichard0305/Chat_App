
//convert mongodb date to a hour and min 
export function getTime(dateString: string){
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    let isAm = true;

    if(hours > 11) {isAm = false;}
    
    if(hours > 12) {hours = hours - 12;} 

    const hoursString = padZero(hours);

    if(isAm)  return `${hoursString}:${minutes} am`;

    else return `${hoursString}:${minutes} pm`;
}

function padZero(number: number){
    return number.toString().padStart(2, "0");
}

//convert mongodb date to a hour and min 
export function getTime(dateString: string){
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    let isAm = true;

    if(hours > 12) {hours = hours - 12; isAm = false} 

    const hoursString = padZero(hours);

    if(isAm)  return `${hours}:${minutes} am`;

    else return `${hours}:${minutes} pm`;
}

function padZero(number: number){
    return number.toString().padStart(2, "0");
}
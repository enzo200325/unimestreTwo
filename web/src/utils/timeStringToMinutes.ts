export function toMinutes(timeString: string): number {
  const columnIndex = timeString?.indexOf(":"); 
  const hour = timeString?.slice(0, columnIndex); 
  const minute = timeString?.slice(columnIndex + 1, timeString.length); 

  let totalInMinutes = (Number(hour) * 60) + Number(minute); 
  return totalInMinutes
}

export function toWeekDay(dayString: string): number {
  switch(dayString) {
    case "Monday": 
      return 1; 
      break;
    case "Tuesday": 
      return 2; 
      break;
    case "Wednesday": 
      return 3; 
      break;
    case "Thursday": 
      return 4; 
      break;
    case "Friday": 
      return 5; 
      break;
  }
}

console.log(new Date().getDate()); 
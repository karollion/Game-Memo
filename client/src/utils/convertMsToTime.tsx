
function padTo2Digits(num : number): string {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds : number): string {
  let milis = milliseconds%1000;
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return `${hours ? (padTo2Digits(hours) + ':'): ''}${padTo2Digits(minutes)}:${padTo2Digits(seconds,)}:${padTo2Digits(milis)}`;
}

export default convertMsToTime;
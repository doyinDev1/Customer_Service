//SETS CURRENT DATE AND TIME FOR USE IN EXPORTED FILE NAMES
export const currentDateTime = () => {
    const today = new Date();
    const date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    const time = today.toLocaleString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true });
    const dateTime = '— '+ date +' @ '+time;
    return dateTime
}
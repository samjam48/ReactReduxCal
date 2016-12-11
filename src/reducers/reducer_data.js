import { FETCH_DATA } from '../actions/index';

export default function(state=[], action){
    console.log('data action: ', action)
    switch (action.type) {
        case FETCH_DATA:
            console.log(action.payload)
            return [ ...action.payload.data]; //add new data to front of our state array
    }
    
    return state;
}


//     let parsedData = payload.data.map((event) => {
//         event.start = convertDate(event.start)
//         event.end = convertDate(event.end)
//         return event
//     })

// console.log(parsedData)

// Date.prototype.getDayOfWeek = function(){   
//     return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
// };

// function convertDate(date){
//     date = new Date(date)
//     return {
//       date: date,
//       dayName: date.getDayOfWeek(),
//       dayNum: date.getDay(),
//       day: date.getDate(),
//       month: date.getMonth(),
//       year: date.getYear()
//     }
// }
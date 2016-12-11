import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
import { WeekStartDate,  ChangeDate } from '../components/date_handlers'






const ROOT_URL = 'https://assessments.bzzhr.net/calendar/calendar/?overlaps=false&since='
let current_date  = WeekStartDate()
let start = current_date.substring(0, 10)
let endSt = ChangeDate(current_date, 7)
let end   = endSt.substring(0, 10)
let week  = `${start}T00%3A00%3A00Z&before=${end}T00%3A00%3A00Z`

// on buttonClick. change start date +/- a week
// update current date state


export function fetchData() {


    const request = axios.get(ROOT_URL + week);
    console.log('request data')
    console.log(request)

    return {
        type: 'FETCH_DATA',
        payload: request
    };
}
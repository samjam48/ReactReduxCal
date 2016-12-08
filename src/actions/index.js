import axios from 'axios';

const ROOT_URL = 'https://assessments.bzzhr.net/calendar/calendar/?overlaps=&since=2016-12-05T04%3A30%3A00Z&before=2016-12-11T15%3A00%3A00Z'
export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    const request = axios.get(ROOT_URL);
    console.log('request data')
    console.log(request)

    // console.log('request: ', request)

    return {
        type: 'FETCH_DATA',
        payload: request
    };
}


// add week parameter to fetch data function

// format for specifying date area____    GET /calendar/?overlaps=&since=2016-12-05T04%3A30%3A00Z&before=2016-12-11T15%3A00%3A00Z
import React from 'react'
import { CalEvents } from './cal_events';

// don't change formatting of 'days' object or table headers will screw up!
let days = {
1 : `Mon
${1}`,
2 : `Tue
${2}`,
3 : `Wed
${3}`,
4 : `Thu
${4}`,
5 : `Fri
${5}`,
6 : `Sat
${6}`,
7 : `Sun
${7}`
}

export const CalHeader = Object.keys(days).map( (day) => { 
                                                        return(
                                                            <TableHeaderColumn className="colHeader" headerAlign='center' dataField={day} width='10%' > 
                                                                <pre>{days[day]}</pre> 
                                                            </TableHeaderColumn> 
                                                        )})
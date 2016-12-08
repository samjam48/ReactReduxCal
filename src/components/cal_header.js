import React from 'react'


let days = {
    mon  : `Mon
${1}`,
    tue  : `Tue
${2}`,
    wed  : `Wed
${3}`,
    thu  : `Thu
${4}`,
    fri  : `Fri
${5}`,
    sat  : `Sat
${6}`,
    sun  : `Sun
${7}`
}

export const CalHeader = Object.keys(days).map( (day) => { 
                                                        return(
                                                            <TableHeaderColumn className="colHeader" headerAlign='center' dataField={day} width='10%' > 
                                                                <pre>{days[day]}</pre> 
                                                            </TableHeaderColumn> 
                                                        )})
import React from 'react'
import { CalRows } from './cal_rows';
import { ConvertDate } from './date_handlers'



export const CalEvents = (data) => {
    return data.map((event) => {
        event.begin = ConvertDate(event.start)
        event.final = ConvertDate(event.end)
        return event
    })
}
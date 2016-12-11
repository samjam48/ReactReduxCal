

Date.prototype.getDayOfWeek = function(){   
    return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ this.getDay() ];
};

Date.prototype.getDayNum = function(){ // Add method to Date so sunday equates to a 7 not a 0. Now weeks start on a Monday
    let day = this.getDay()
    if(day == 0) day = 7
    return day;
};


export const ChangeDate = (date, change) => {
  date = new Date(date)
  date.setDate(date.getDate()+change)
  date = date.toISOString()
  return date
}


export const WeekStartDate = () =>{
    var currDate = new Date;
    var firstDayOfWeek = new Date(currDate.setDate(currDate.getDate() - currDate.getDayNum()+1));
    return firstDayOfWeek.toISOString()
}


export const ConvertDate = (date) => {
    date = new Date(date)
    return {
      date: date,
      hours: date.getHours(),
      dayName: date.getDayOfWeek(),
      dayNum: date.getDayNum(),
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getYear()
    }
}
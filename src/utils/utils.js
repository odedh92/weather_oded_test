export const getDayString = (day) => {
    switch (day) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Thuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thuersday"
        case 5:
            return "Friday"
        default:
            return "Saturday"
    }
}

// Chart utility
export const wrapChartDays = (data) => {

    const days = data.daily
    const wrap = [["day", "high °", "low °"]]

    days.forEach((day, index) => {
        let d = index
        let min = day.temp.min
        let max = day.temp.max
        wrap.push([d, max, min])
    })
    return wrap
}
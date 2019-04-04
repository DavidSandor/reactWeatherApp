const today = {
    currentTemp : 23,
    maxTemp : 23,
    minTemp : 5,
    currentState : "windy"
}

const tomorrow = {
    maxTemp : 20,
    minTemp: 10,
    averageState: "sunny"
}

const afterTomorrow = {
    maxTemp : 25,
    minTemp: 14,
    averageState: "cloudy"
}

export {
    today as Today,
    tomorrow as Tomorrow,
    afterTomorrow as AfterTomorrow
};
const today = {
    currentTemp : 21,
    maxTemp : 23,
    minTemp : 5,
    currentType : "windy"
}

const forecast = [
    {
        maxTemp : 20,
        minTemp: 10,
        averageType: "sunny"
    },
    
    {
        maxTemp : 25,
        minTemp: 14,
        averageType: "cloudy"
    },

    {
        maxTemp : 22,
        minTemp: 11,
        averageType: "cloudy"
    }
]

export {
    today as Today,
    forecast as Forecast
};
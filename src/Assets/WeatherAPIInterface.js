import {Today} from './Data/FakeWeatherData';
import {Forecast} from './Data/FakeWeatherData';

class WeatherAPIInterface {   

    getCurrentWeatherState = () => {
        return {
            currentTemp : Today.currentTemp,
            maxTemp : Today.maxTemp,
            minTemp : Today.minTemp,
            currentType : Today.currentType
        };
    }

    getWeatherStateByDay = (day) => {
        if(day >= 0 && day < Forecast.length){
            return {
                maxTemp : Forecast[day].maxTemp,
                minTemp: Forecast[day].minTemp,
                averageType: Forecast[day].averageType
            }
        } else {
            return null;
        }
    }   
}
  
export default WeatherAPIInterface;
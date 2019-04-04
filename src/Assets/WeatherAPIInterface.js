import {Today} from './Data/FakeWeatherData';
import {Tomorrow} from './Data/FakeWeatherData';
import {AfterTomorrow} from './Data/FakeWeatherData';

class WeatherAPIInterface {   

    getCurrentWeatherState = () => {
        return Today.currentState;
    }

    getCurrentTemp = () => {            
        return Today.currentTemp;
    }

    getTodaysMaxTemp = () => {
        return Today.maxTemp;
    }

    getTodaysMinTemp = () => {
        return Today.minTemp;
    }   

    getMaxTempByDate = (dayShift) => {
        switch(dayShift){
            case 1:
            return Tomorrow.maxTemp;
            case 2:
            return AfterTomorrow.maxTemp;
            default:
            return 100;
        }
    }

    getMinTempByDate = (dayShift) => {
        switch(dayShift){
            case 1:
            return Tomorrow.minTemp;
            case 2:
            return AfterTomorrow.minTemp;
            default:
            return -100;
        }
    }
}
  
export default WeatherAPIInterface;
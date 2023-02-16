//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
const api = {
  key : '916b4d8b896d4b39852133816231602',
}
function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState(null)
  const [unit,setUnit] = useState(window.localStorage.getItem("Unit"));
  const searchPressed = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api.key}&q=${search}&days=10&aqi=yes&alerts=yes`);
    const data = await res.json();
    setWeather(data);
  }
  const myStyle={
    backgroundImage: "url("+weather?.current.condition.icon+")",
  };
  return (
    <>
    <div style={myStyle}>
    <h1>Weather App</h1>
    <p>
      <input type="text" placeholder="City" onChange={(e) => setSearch(e.target.value)}/>&emsp;
      <input type="text" placeholder="Unit" id="userInput" onChange={(e) => {
        setUnit(e.target.value);
        window.localStorage.setItem("Unit",e.target.value);
      }}/>&emsp;
      <button onClick={searchPressed}>SEARCH</button>
    </p>
    <center>
    <table className="t1">
    <tr><td className="match"><span>City: </span></td><td className="match">{weather?.location.name}</td><td className="match"></td><td className="match"><span>Country: </span></td><td className="match">{weather?.location.country}</td></tr>
    <tr><td className="match"><span>Temperature: </span></td><td className="match">{unit.charAt(0) === "C" ? weather?.current.temp_c : weather?.current.temp_f} °{window.localStorage.getItem("Unit")}</td><td className="match"></td><td className="match"><span>Humidity: </span></td><td className="match">{weather?.current.humidity}</td></tr>
    <tr><span>Wind:</span></tr>
    <tr><td className="match" colspan='2'>In mph: {weather?.current.wind_mph}</td><td className="match" colspan='2'>In kph: {weather?.current.wind_kph}</td><td className="match" colspan='2'>Direction: {weather?.current.wind_dir}</td></tr>
    </table>
    </center>
    <br/>
    <h2>Temperature for 10 Days</h2>
    <center>
    <table>
    <tr>
    Date: {weather?.forecast.forecastday[0].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[0].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[0].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[0].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[0].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[1].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[1].day.maxtemp_c : weather?.forecast.forecastday[1].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[1].day.mintemp_c : weather?.forecast.forecastday[1].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[1].day.avgtemp_c : weather?.forecast.forecastday[1].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[1].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[2].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[2].day.maxtemp_c : weather?.forecast.forecastday[2].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[2].day.mintemp_c : weather?.forecast.forecastday[2].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[2].day.avgtemp_c : weather?.forecast.forecastday[2].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[2].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[3].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[3].day.maxtemp_c : weather?.forecast.forecastday[3].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[3].day.mintemp_c : weather?.forecast.forecastday[3].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[3].day.avgtemp_c : weather?.forecast.forecastday[3].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[3].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[4].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[4].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[4].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[4].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[4].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[5].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[5].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[5].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[5].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[5].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[6].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[6].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[6].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[6].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[6].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[7].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[7].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[7].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[7].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[7].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[8].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[8].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[8].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[8].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[8].day.condition.text}</td>
    </tr>
    <tr>
    Date: {weather?.forecast.forecastday[9].date}
    </tr>
    <tr>
    <td className="match2">Minimum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[9].day.maxtemp_c : weather?.forecast.forecastday[0].day.maxtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Maximum Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[9].day.mintemp_c : weather?.forecast.forecastday[0].day.mintemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Average Temperature: {unit.charAt(0) === "C" ? weather?.forecast.forecastday[9].day.avgtemp_c : weather?.forecast.forecastday[0].day.avgtemp_f} °{window.localStorage.getItem("Unit")}</td><td></td>
    <td className="match2">Condition: {weather?.forecast.forecastday[9].day.condition.text}</td>
    </tr>
    </table>
    </center>
    </div>
    </>
    )
}
export default App;
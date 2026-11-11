// **** The Main Page ****
import { useEffect, useState } from "react";
import "./weather.css";
import { getWeatherCondition } from "./WeatherCondition";
import useWeatherApi from "./get_inf_weather";

const Weather_Code = () => {
    const [InputCity, setInputCity] = useState("Paris");
    const { Weathers, setSearch, Message, Loading, Search } = useWeatherApi();
    // Search Function -> handleSearch()
    const handleSearch = (e) => {
        e.preventDefault();
        if (InputCity.trim() === "") {
            return setMessage("Please enter a city name / يرجى كتابة اسم المدينة");
        }
        setSearch(InputCity);
    };
    // The Condition from Page : "./WeatherCondition" 
    const condition = getWeatherCondition(Weathers.WMO);
    return (
        <div className="page">
            <div className="card">
                <h1 className="title">Weather Assistant 🌤️ مساعد الطقس</h1>

                {/* Search Form */}
                <form onSubmit={handleSearch} className="form">
                    <input
                        type="text"
                        value={InputCity}
                        onChange={(e) => setInputCity(e.target.value)}
                        placeholder="Search City / ابحث عن مدينة..."
                        className="input"
                        required
                    />
                    <button type="submit" className="button">Search / بحث</button>
                </form>
                {/* Message display */}
                {Message && <p className="error">{Message}</p>}
                {/* Weather Content */}
                {Loading ? (
                    <p className="loading">Loading weather data... / جاري التحميل...</p>
                ) : (
                    Weathers.temperature !== undefined && (
                        <div>
                            <h2 className="cityName">📍 {Search}</h2>
                            <div className="icon">{condition.icon}</div>
                            <h3 className="temp">{Weathers.temperature} °C</h3>

                            <div className="grid">
                                <div className="gridItem">
                                    <span className="label">💨 Wind / الرياح</span>
                                    <span className="value">{Weathers.wind_speed} km/h</span>
                                </div>
                                <div className="gridItem">
                                    <span className="label">🌤️ Status / الحالة</span>
                                    <span className="value">{condition.ar}</span>
                                </div>
                            </div>

                            {/* Advice Box */}
                            <div className="adviceBox">
                                <h4 style={{ margin: "0 0 5px 0", color: "#d35400" }}>💡 Advice / النصيحة</h4>
                                <p className="adviceText">{condition.adviceAr}</p>
                                <p className="adviceTextEn">{condition.adviceEn}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Weather_Code;
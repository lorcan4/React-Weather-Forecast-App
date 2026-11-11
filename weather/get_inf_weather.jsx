// **** Get Inf Weather ****
import { useEffect, useState } from "react";
// Weather Function For Fetch The API and pros 
const useWeatherApi = () => {
    const [Weathers, setWeathers] = useState({});
    const [Search, setSearch] = useState("Paris");
    const [Message, setMessage] = useState("");
    const [Loading, setLoading] = useState(false);
    useEffect(() => {
        const Get_inf_Weather = async () => {
            setLoading(true);
            setMessage("");
            try {
                // API: 1 => Get (lat,lon) of The City
                const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(Search)}&count=1`);
                const data = await res.json();
                if (!data.results || data.results.length === 0) {
                    setMessage("City not found / المدينة غير موجودة");
                    setLoading(false);
                    return;
                }

                const lat = data.results[0].latitude;
                const lon = data.results[0].longitude;
                // API: 2 => Get Data of The Weather
                const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`);
                const weatherData = await weatherRes.json();
                if (!weatherData.current) {
                    setMessage("Weather data unavailable / تعذر جلب البيانات");
                    setLoading(false);
                    return;
                }

                setWeathers({
                    temperature: weatherData.current.temperature_2m,
                    wind_speed: weatherData.current.wind_speed_10m,
                    WMO: weatherData.current.weather_code
                });
            } catch (error) {
                console.log("Error Fetch Weather", error);
                setMessage("Connection Error / خطأ في الاتصال");
            } finally {
                setLoading(false);
            }
        };

        Get_inf_Weather();
    }, [Search]);
    return {
        Weathers,
        Search,
        setSearch,
        Message,
        Loading,
    }
}

export default useWeatherApi;
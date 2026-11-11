export const getWeatherCondition = (code) => {
    if (code === 0) {
        return {
            en: "Clear / Sunny",
            ar: "صافي / مشمس",
            adviceEn: "Sunny and clear! Great day to be outside.",
            adviceAr: "الطقس صافي ومشمش! يوم رائع للخروج.",
            icon: "☀️"
        };
    }
    if ([1, 2, 3].includes(code)) {
        return {
            en: "Cloudy / Overcast",
            ar: "غائم / غائم جزئياً",
            adviceEn: "It's cloudy today. A light jacket might be helpful.",
            adviceAr: "الطقس غائم اليوم. قد تحتاج سترة خفيفة.",
            icon: "⛅"
        };
    }
    if ([45, 48].includes(code)) {
        return {
            en: "Foggy",
            ar: "ضبابي",
            adviceEn: "Visibility is low due to fog. Drive carefully!",
            adviceAr: "الرؤية منخفضة بسبب الضباب. قد بحذر!",
            icon: "🌫️"
        };
    }
    if ([51, 53, 55, 56, 57].includes(code)) {
        return {
            en: "Drizzle",
            ar: "رذاذ مطر",
            adviceEn: "Light drizzle outside. An umbrella might be handy.",
            adviceAr: "رذاذ مطر خفيف بالخارج. يفضل أخذ مظلة.",
            icon: "🌦️"
        };
    }
    if ([20, 21, 22, 23, 24, 25, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
        return {
            en: "Rainy",
            ar: "ممطر",
            adviceEn: "It is raining outside. Don't forget your umbrella!",
            adviceAr: "الطقس ممطر بالخارج. لا تنسَ مظلتك!",
            icon: "🌧️"
        };
    }
    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return {
            en: "Snowy",
            ar: "مثلج",
            adviceEn: "It is snowing! Wear warm clothes and stay safe.",
            adviceAr: "الطقس يتساقط فيه الثلج! ارتدِ ملابس دافئة.",
            icon: "❄️"
        };
    }
    if ([95, 96, 99].includes(code)) {
        return {
            en: "Thunderstorm",
            ar: "عاصفة رعدية",
            adviceEn: "Thunderstorms expected! Stay indoors if possible.",
            adviceAr: "عاصفة رعدية متوقعة! يفضل البقاء في المنزل.",
            icon: "⛈️"
        };
    }
    return {
        en: "Normal / Unknown",
        ar: "طبيعي / غير معروف",
        adviceEn: "Check the skies before heading out!",
        adviceAr: "تفحص حالة الجو قبل الخروج!",
        icon: "🌡️"
    };
};
export default getWeatherCondition;

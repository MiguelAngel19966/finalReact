    const API_KEY = '32692425b1954f57a61230045241604'; 
    const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

    export const fetchWeatherData = async (city) => {
        const url = `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                throw new Error(data.error.message || 'Error fetching weather data');
            }
        } catch (error) {
            throw new Error(error.message || 'Error fetching weather data');
        }
    };
